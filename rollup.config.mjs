import sucrase from "@rollup/plugin-sucrase";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: `src/index.ts`,
  output: [
    {
      file: `./lib/build/index.es.js`,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      include: [`./src/**/*`],
    }),
    resolve({
      extensions: [".js", ".ts"],
    }),
    sucrase({
      exclude: ["node_modules/**"],
      transforms: ["typescript", "jsx", 'imports'],
    }),
  ],
};
export default config;
