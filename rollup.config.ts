import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const pkg = require("./package.json");
const dependencies = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies)
];

const libraryName = "reactKonfettikanone";

export default {
  input: "src/index.ts",
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
  external: dependencies,
  plugins: [
    typescript(),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      extensions: [".ts", ".tsx"]
    }),
    commonjs({
      include: "node_modules/classnames/*",
      extensions: [".js"],
      sourceMap: false
    }),
    resolve({
      mainFields: ["module", "main"],
      extensions: [".ts", ".tsx"]
    })
  ]
};
