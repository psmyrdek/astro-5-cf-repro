import fs from "fs";
import path from "path";

const addon = `
const When = {
    Client: 'client',
    Server: 'server',
    Prerender: 'prerender',
    StaticBuild: 'staticBuild',
    DevServer: 'devServer',
}

const whenAmI = When;
`;

function getMiddlewarePath(backup = false) {
  return path.join(
    new URL(".", import.meta.url).pathname,
    `../node_modules/@astrojs/cloudflare/dist/entrypoints/middleware.js${
      backup ? ".bak" : ""
    }`
  );
}

const fileContent = fs.readFileSync(getMiddlewarePath(), "utf8");

if (fileContent.includes("@it-astro:when")) {
  const lines = fileContent.split("\n");
  const filteredLines = lines.filter(
    (line) => !line.includes("@it-astro:when")
  );

  const newContent = addon + "\n" + filteredLines.join("\n");

  fs.writeFileSync(getMiddlewarePath(true), fileContent, "utf8");
  fs.writeFileSync(getMiddlewarePath(), newContent, "utf8");
}
