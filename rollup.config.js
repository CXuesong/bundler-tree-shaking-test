import typescript from "@rollup/plugin-typescript";

/** @type {import("rollup").RollupOptions} */
export default {
  input: './src/main.ts',
  output: {
    file: "dist/dist-rollup.js",
    format: "iife",
    sourcemap: false,
  },
  treeshake: "smallest",
  plugins: [typescript({
    tsconfig: "./src/tsconfig.json",
  })],
};
