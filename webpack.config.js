const path = require("path");

module.exports = {
  mode: "development",
  entry: "./dist/index.js",
  output: {
    filename: "./dist/bundle.js",
    path: path.join(__dirname, "./"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
  },
};
