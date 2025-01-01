# Astro Starter Kit: Basics

Reproducing the issue with Cloudflare Adapter & npm workspaces.

## How to

1. `npm install`
2. `npm run dev:acf`
3. Open http://localhost:3000 - notice issue with @it-astro:when

## Example workaround

1. `npm run fix` (see fix/rewrite-deps.js)

## Using workspaces

```json
"scripts": {
    "dev:acf": "npm run dev --workspace=projects/astro-on-cloudflare",
    "build:acf": "npm run build --workspace=projects/astro-on-cloudflare",
    "preview:acf": "npm run preview --workspace=projects/astro-on-cloudflare",
    "astro:acf": "npm run astro --workspace=projects/astro-on-cloudflare"
  },
```
