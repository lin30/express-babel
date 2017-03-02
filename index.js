require('babel-core/register') // 封装了 require,对一下 require 的文件进行编译
require('./app.js')
require("babel-core").transform("code", {
  plugins: ["transform-runtime"]
}) // 插件 runtime提 供 es6 API的 polyfill