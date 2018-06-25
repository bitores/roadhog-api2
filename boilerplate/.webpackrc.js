console.log('........webrc')
export default {
  entry: "src/api.js",
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
      }
    ]
  ],
  env: {
    development: {
      extraBabelPlugins: ["dva-hmr"]
    }
  },
  ignoreMomentLocale: true,
  html: {
    template: './public/api.html',
  },
  disableDynamicImport: true,
  hash: false,
  extraBabelIncludes: ["../mock"]
};
