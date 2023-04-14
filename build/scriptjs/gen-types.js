/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const klawSync = require('klaw-sync');
const vueCompiler = require('@vue/compiler-sfc');
const { Project } = require('ts-morph');
const { noPreFixDir, rootFile } = require('./common');

const DEMO_RE = /\/demo\/\w+\.vue$/;
const TEST_RE = /__test__|__tests__/;
const outFileName = ['lib', 'es'];
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
const genVueTypes = async outFileName => {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(__dirname, `../../${outFileName}`),
      rootDir: path.resolve(__dirname, '../../packages'),
    },
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFiles = [];

  const filePaths = klawSync(path.resolve(__dirname, '../../packages'), {
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

  // 更改 module path
  const ROOT_PATH = path.resolve(__dirname, '../../packages/');
  const RadiumVueSign = '@radium-vue/';
  for (const sourceFile of sourceFiles) {
    const sourceFilePathName = sourceFile.getFilePath();

    if (sourceFilePathName.includes('packages/radium-vue')) {
      sourceFile.getExportDeclarations().map(modifySpecifier);
    }

    sourceFile.getImportDeclarations().map(modifySpecifier);

    function modifySpecifier(d) {
      const specifier = d.getModuleSpecifierValue();

      if (specifier && specifier.includes(RadiumVueSign)) {
        const importItem = specifier.slice(RadiumVueSign.length);
        let replacer = '';
        if (!noPreFixDir.test(importItem)) {
          replacer = 'ra-';
        }
        const originalPath = path.resolve(
          ROOT_PATH,
          `./${replacer}${importItem}`,
        );
        const sourceFilePath = sourceFile.getFilePath();
        const sourceDir = sourceFilePath.includes('packages/radium-vue')
          ? path.dirname(path.resolve(sourceFilePath, '../'))
          : path.dirname(sourceFilePath);
        const replaceTo = path
          .relative(sourceDir, originalPath)
          .replaceAll('\\', '/');

        d.setModuleSpecifier(
          replaceTo.startsWith('.') ? replaceTo : `./${replaceTo}`,
        );
      }
    }

    // 配置输出路径
    const emitOutput = sourceFile.getEmitOutput();
    for (const outputFile of emitOutput.getOutputFiles()) {
      let filepath = outputFile.getFilePath();
      const filepathArray = filepath.split('/');
      const outFileIndex = filepathArray.indexOf(outFileName) + 1;
      const fileName = filepathArray[outFileIndex];
      if (!noPreFixDir.test(fileName)) {
        filepathArray[outFileIndex] = `ra-${fileName}`;
      }
      // 根目录输出倒lib/
      if (rootFile.test(fileName)) {
        filepathArray.splice(outFileIndex, 1);
        filepathArray.splice(outFileIndex + 1, 1);
      }
      filepath = filepathArray.join('/');

      await fs.promises.mkdir(path.dirname(filepath), {
        recursive: true,
      });
      console.log(filepath);
      await fs.promises.writeFile(filepath, outputFile.getText(), 'utf8');
    }
  }
};

async function build(rootFileName) {
  try {
    await genVueTypes(rootFileName);
    outFileName.length && build(outFileName.shift());
  } catch (e) {
    console.log(e);
  }
}

build(outFileName.shift());
