const path = require("path")

module.exports = {
  // We can switch between development and production
  mode: "development",
  // entry telling TS where to start bundling. The entry can be relative
  entry: "./src/index.ts",


  devtool: "inline-source-map",
  // Module is a object that allows different rules. Things to do when it encounters
  // whatever. Today we just care about TS
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        // Exclude means do not touch. node can have a lot of TS we dont want touched
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist"
  },
}