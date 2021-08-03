const { Project } = require('ts-morph');
const klawSync = require('klaw-sync');
const path = require('path');
const rootTsConfig = path.resolve(__dirname + '../tsconfig.json');
paths = klawSync(path.resolve(__dirname + '../packages'));

console.log(paths);
const project = new Project({
  compilerOptions: {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    noEmitOnError: false,
    outDir: path.resolve(__dirname, '../lib'),
    baseUrl: path.resolve(__dirname, '../'),
    paths: {
      '@radium-plus/*': ['packages/*'],
    },
  },
  tsConfigFilePath: rootTsConfig,
  skipAddingFilesFromTsConfig: true,
});
