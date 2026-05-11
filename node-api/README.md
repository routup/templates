# routup-node-api

A minimal JSON API starter built with [routup](https://github.com/routup/routup) on Node.js.

## What's inside

- `routup` for routing
- `@routup/body` for JSON / urlencoded body parsing
- `tsx` for zero-config TypeScript execution
- Two example routes: `GET /health` and `POST /echo`

## Use this template

```bash
npx degit routup/templates/node-api my-app
cd my-app
npm install
npm run dev
```

The server listens on port `3000` (override with `PORT=8080`).

## Try it

```bash
curl http://localhost:3000/health
# -> {"status":"ok"}

curl -X POST http://localhost:3000/echo \
  -H 'content-type: application/json' \
  -d '{"hello":"world"}'
# -> {"received":{"hello":"world"}}
```

## Scripts

| Script | What it does |
|--------|--------------|
| `npm run dev` | Start the server with auto-reload on file changes |
| `npm start` | Start the server once (no watcher) |
