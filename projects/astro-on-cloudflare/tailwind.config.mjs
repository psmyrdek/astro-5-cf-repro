import path from "path";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.resolve(
      __dirname,
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
    ),
  ],
  theme: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
