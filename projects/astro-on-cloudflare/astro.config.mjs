import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import {defineConfig} from "astro/config";

export default defineConfig({
  integrations: [tailwind()],
  adapter: cloudflare({
    imageService: "compile",
  }),
  server: {port: 3000},
});
