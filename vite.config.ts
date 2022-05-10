// eslint-disable-next-line import/no-unresolved
import react from "@vitejs/plugin-react";
import path from "path";
import visualizer from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import vitePluginImp from "vite-plugin-imp";
import { AntdResolve, createStyleImportPlugin } from "vite-plugin-style-import";
import tsconfigPaths from "vite-tsconfig-paths";
// import { antdThemeVariables } from "./src/styles/antd/antdThemeVariables";

export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      typescript: true,
    }),
    visualizer({
      gzipSize: true,
    }),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
    vitePluginImp({ exclude: ["antd"] }),
  ],
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "./src/styles"),
    },
  },
  preview: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: antdThemeVariables,
        javascriptEnabled: true,
      },
    },
  },
});
