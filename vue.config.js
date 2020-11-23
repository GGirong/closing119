const ansiRegex = require("ansi-regex");
module.exports = {
  lintOnSave: false,
  publicPath: "/",
  assetsDir: process.env.BASE_URL,
  transpileDependencies: [ansiRegex],
};