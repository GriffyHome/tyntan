import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

// Alternatively, you may need the correct named export for the polyfill
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    nodePolyfills(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
    }),
    NodeModulesPolyfillPlugin(),
  ],
});
