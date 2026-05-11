# routup-cloudflare-worker

A minimal [routup](https://github.com/routup/routup) starter for [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## What's inside

- `routup` imported via `routup/cloudflare`
- `wrangler` for local dev and deploy
- Two example routes: `GET /` and `GET /greet/:name`

## Use this template

```bash
npx degit routup/templates/cloudflare-worker my-worker
cd my-worker
npm install
npm run dev
```

Visit http://localhost:8787 to test locally.

## Deploy

```bash
npx wrangler login   # one-time
npm run deploy
```

Edit `wrangler.toml` to change the worker name, route bindings, KV bindings, etc.

## Scripts

| Script | What it does |
|--------|--------------|
| `npm run dev` | Start a local dev server with `wrangler dev` |
| `npm run deploy` | Deploy to your Cloudflare account |
