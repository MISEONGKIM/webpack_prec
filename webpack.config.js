// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require("path");
// css파일을 별도로 분리하기 위해 플러그인 추가
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
};
