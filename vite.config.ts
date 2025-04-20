import { defineConfig, UserConfig } from "vite";
import { checker } from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig((env): UserConfig => {
  const isProduction = env.mode?.toLowerCase() === "prod";
  console.log("isProduction: ", isProduction);

  return {
    plugins: [
      tsconfigPaths({ loose: true }),
      checker({
        typescript: {
          tsconfigPath: "./src/tsconfig.json",
        },
      }),
    ],
    base: "./",
    build: {
      target: "es2022",
      outDir: "./dist",
      emptyOutDir: true,
      minify: "esbuild",
      rollupOptions: {
        // https://vite.dev/guide/backend-integration.html
        input: "./src/main.ts",
        output: {
          format: "iife",
          inlineDynamicImports: true,
          entryFileNames: "dist-vite.js",
        },
      },
    },
  };
});
