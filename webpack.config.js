import * as path from "path";

/** @type {import("webpack").Configuration} */
export default {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    path: path.resolve("./dist"),
    filename: "dist-webpack.js",
    iife: true,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
