import sucrase from "@rollup/plugin-sucrase";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

// To handle css files
import postcss from "rollup-plugin-postcss";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";
import dts from "rollup-plugin-dts";

const config = [
  {
    input: `src/index.ts`,
    ignore: ["node_modules/**"],
    output: [
      {
        file: `./lib/bundle.js`,
        format: "umd",
        name: "MyLibrary",
        esModule: false,
        sourcemap: true,
        strict: false,
      },
      {
        file: `./lib/esm/index.js`,
        format: "esm",
        sourcemap: true,
      },
      {
        file: `./lib/cjs/index.js`,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.lib.json" }),
      postcss(),
      terser(),
      image(),
      sucrase({
        exclude: ["node_modules/**", "src/pages"],
        transforms: ["typescript", "jsx", "imports"],
      }),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
    ],
  },
  {
    input: "lib/esm/types/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  },
];
export default config;
