# Routup Templates

Starter templates for [routup](https://github.com/routup/routup). Each subdirectory is a self-contained, working starter for a specific runtime.

## Usage

Scaffold a new project from any template with [`degit`](https://github.com/Rich-Harris/degit):

```bash
npx degit routup/templates/node-api my-app
cd my-app
npm install
npm run dev
```

## Templates

| Template | Runtime | Highlights |
|----------|---------|------------|
| [node-api](./node-api) | Node.js >=22 | Basic JSON API with `@routup/body` middleware |
| [cloudflare-worker](./cloudflare-worker) | Cloudflare Workers | Configured with `wrangler`, deploys with one command |
| [bun-decorators](./bun-decorators) | Bun | Class-based routing via `@routup/decorators` |

## License

[MIT](./LICENSE)
