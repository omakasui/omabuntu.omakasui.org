// @ts-check

import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import tailwindcss from "@tailwindcss/vite";

// Remark plugins
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkDirective from "remark-directive";
import remarkCodeTabs from "./src/utils/remark-code-tabs.ts";

import react from "@astrojs/react";

import icon from "astro-icon";
import svgr from "vite-plugin-svgr";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://omabuntu.omakasui.org",
  base: "/",

  vite: {
    plugins: [tailwindcss(), svgr()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          sourcemap: false,
        },
      },
    },
  },

  markdown: {
    remarkPlugins: [remarkAlert, remarkDirective, remarkCodeTabs],
    rehypePlugins: [],
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  integrations: [
    react(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
