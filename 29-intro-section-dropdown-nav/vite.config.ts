import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    VitePluginFonts({
      google: {
        families: ["Epilogue"],
      },
    }),
  ],
});
