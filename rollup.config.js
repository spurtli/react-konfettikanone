import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "cjs"
  },
  external: ["react", "emotion", "classnames"],
  plugins: [
    resolve({
      mainFields: ["module", "main"]
    }),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    }),
    commonjs({
      include: "node_modules/classnames/*",
      extensions: [".js"],
      sourceMap: false
    }),
    uglify()
  ]
};
