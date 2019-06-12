const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    chunkFilename: "[name].[chunkhash:5].chunk.js"
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, "./src/styles")
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: [
              {
                loader: "style-loader",
                options: { singleton: true }
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: "[name]_[local]_[hash:base64:5]"
                }
              },
              {
                loader: "less-loader"
              }
            ]
          },
          {
            use: [
              {
                loader: "style-loader",
                options: { singleton: true }
              },
              {
                loader: "css-loader"
              },
              {
                loader: "less-loader"
              }
            ]
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader?cacheDirectory=true",
            options: {
              configFile: false,
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          },
          "ts-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            configFile: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "dynamic-import-webpack",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
