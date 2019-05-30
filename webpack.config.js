const webpack = require("webpack"); //访问内置的插件
const path = require("path");
const Config = require("webpack-chain");

const config = new Config();


config.mode(process.env.NODE_ENV);

config
  .entry("index")
	  .add(path.resolve(__dirname, "src/index.js"))
	  .end()
  .output.path(path.resolve(__dirname, "dist"))
    .filename("[name].bundle.js");

config.module
  .rule("css")
  .test(/\.(css|s[ac]ss)$/)
  .use("css-loader")
	  .loader("css-loader")
	  .options({ modules: true })
	  .end()
  .use("sass-loader")
	  .loader("sass-loader")
	  .end();

config.module
  .rule("js")
  .test(/\.ts$/)
    .use("ts-loader")
    .loader("ts-loader")
	  .end();

config.optimization
  .splitChunks({ chunks: 'all' })

// config.plugin
//   .use(       
//     new webpack.DllReferencePlugin({
//     context: __dirname,
//     manifest: require('../dll/manifest.json'),
//   }))

module.exports = config.toConfig();