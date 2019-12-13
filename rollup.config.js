import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";

const pkg = require("./package.json");

const libraryName = "reactKonfettikanone";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      name: libraryName,
      format: "umd",
      sourcemap: true,
      globals: {
        react: "React",
        classnames: "classNames",
        emotion: "emotion"
      }
    },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  external: ["react", "emotion", "classnames"],
  plugins: [
    babel({
      exclude: "node_modules/**", // only transpile our source code
      extensions: [".js", ".jsx"]
    }),
    commonjs({
      include: "node_modules/classnames/*",
      extensions: [".js"],
      sourceMap: false
    }),
    resolve({
      mainFields: ["module", "main"],
      extensions: [".js", ".jsx"]
    })
  ]
};
