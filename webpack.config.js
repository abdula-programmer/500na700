const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sass|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
