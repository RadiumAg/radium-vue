/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const klawSync = require('klaw-sync');
const vueCompiler = require('@vue/compiler-sfc');
const { Project } = require('ts-morph');
const { noPreFixFile } = require('./common');

const DEMO_RE = /\/demo\/\w+\.vue$/;
const TEST_RE = /__test__|__tests__/;
const outFileName = 'lib';
const excludedFiles = [
  'mock',
  'package.json',
  'spec',
  'test',
  'tests',
  'css',
  '.DS_Store',
];
const exclude = path => !excludedFiles.some(f => path.includes(f));

/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
const genVueTypes = async () => {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(__dirname, `../${outFileName}`),
      baseUrl: path.resolve(__dirname, '../packages'),
      paths: {
        '@radium-vue/*': ['packages/*'],
      },
    },
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFiles = [];

  const filePaths = klawSync(path.resolve(__dirname, '../packages'), {
    nodir: true,
  })
    .map(item => item.path)
    .filter(path => !DEMO_RE.test(path))
    .filter(path => !TEST_RE.test(path))
    .filter(exclude);

  await Promise.all(
    filePaths.map(async file => {
      if (file.endsWith('.vue')) {
        const content = await fs.promises.readFile(file, 'utf-8');
        const sfc = vueCompiler.parse(content);
        const { script, scriptSetup } = sfc.descriptor;
        if (script || scriptSetup) {
          let content = '';
          let isTS = false;
          if (script && script.content) {
            content += script.content;
            if (script.lang === 'ts') isTS = true;
          }
          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            });
            content += compiled.content;
            if (scriptSetup.lang === 'ts') isTS = true;
          }
          const sourceFile = project.createSourceFile(
            path.relative(process.cwd(), file) + (isTS ? '.ts' : '.js'),
            content,
          );
          sourceFiles.push(sourceFile);
        }
      } else if (file.endsWith('.ts')) {
        const sourceFile = project.addSourceFileAtPath(file);
        sourceFiles.push(sourceFile);
      }
    }),
  );

  // await project.emit({
  //   emitOnlyDtsFiles: true,
  // });

  const ROOT_PATH = path.resolve(__dirname, '../packages/');
  const RadiumVueSign = '@radium-vue/';
  for (const sourceFile of sourceFiles) {
    const sourceFilePathName = sourceFile.getFilePath();

    if (sourceFilePathName.includes('packages/element-plus')) {
      sourceFile.getExportDeclarations().map(modifySpecifier);
    }

    sourceFile.getImportDeclarations().map(modifySpecifier);

    function modifySpecifier(d) {
      const specifier = d.getModuleSpecifierValue();

      if (specifier && specifier.includes(RadiumVueSign)) {
        const importItem = specifier.slice(RadiumVueSign.length);
        let replacer = '';
        if (!noPreFixFile.test(importItem)) {
          replacer = 'ra-';
        }
        const originalPath = path.resolve(
          ROOT_PATH,
          `./${replacer}${importItem}`,
        );
        console.log(ROOT_PATH);

        const sourceFilePath = sourceFile.getFilePath();

        const sourceDir = sourceFilePath.includes('packages/radium-vue')
          ? path.dirname(path.resolve(sourceFilePath, './'))
          : path.dirname(sourceFilePath);
        const replaceTo = path
          .relative(sourceDir, originalPath)
          .replace(/\\/g, '/');
        console.log(replaceTo);
        // This is a delicated judgment which might fail when edge case occurs
        d.setModuleSpecifier(
          replaceTo.startsWith('.') ? replaceTo : `./${replaceTo}`,
        );
      }
    }

    const emitOutput = sourceFile.getEmitOutput();
    for (const outputFile of emitOutput.getOutputFiles()) {
      let filepath = outputFile.getFilePath();
      const filepathArray = filepath.split('/');
      const outFileIndex = filepathArray.findIndex(_ => _ === outFileName) + 1;
      if (!noPreFixFile.test(filepathArray[outFileIndex])) {
        filepathArray[outFileIndex] = 'ra-' + filepathArray[outFileIndex];
        filepath = filepathArray.join('/');
      }
      await fs.promises.mkdir(path.dirname(filepath), {
        recursive: true,
      });

      await fs.promises.writeFile(filepath, outputFile.getText(), 'utf8');
    }
  }
};

const spinner = ora('Generate types...\n').start();

genVueTypes()
  .then(() => spinner.succeed('Success !\n'))
  .catch(e => spinner.fail(`${e} !\n`));
