import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import vitePluginImp from "vite-plugin-imp";
import { AntdResolve, createStyleImportPlugin } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer(),
    // import component library styles on demand
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
    // import UI component library styles automatic
    vitePluginImp({ exclude: ["antd"] }),
  ],

  // This is a special config only when using antd
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
