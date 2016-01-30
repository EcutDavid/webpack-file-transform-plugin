# webpack-file-transform-plugin

#### usage
```
  //VersionFile plugin will generate a version.txt on project root directory 
  new VersionFile({
    templateString: "build-date: " + new Date(),
  }),
  new webpackFileTransformPlugin({
    path: PathOfTheTxtFile,
    outputPath: TransforTargetPath,
  }),
```
