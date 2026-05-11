# routup-bun-decorators

A class-based [routup](https://github.com/routup/routup) starter built with [Bun](https://bun.sh) and [`@routup/decorators`](https://github.com/routup/plugins/tree/master/packages/decorators).

## What's inside

- `routup` for routing
- `@routup/decorators` for class- and method-decorator routing (`@DController`, `@DGet`, `@DPath`, ...)
- `reflect-metadata` (required by the decorators plugin)
- One example controller: `GreetController` mounted at `/greet`

## Use this template

```bash
npx degit routup/templates/bun-decorators my-app
cd my-app
bun install
bun run dev
```

Requires [Bun](https://bun.sh) >=1.1.

## Try it

```bash
curl http://localhost:3000/greet
# -> {"message":"Hello, World!"}

curl http://localhost:3000/greet/Ada
# -> {"message":"Hello, Ada!"}
```

## Add a controller

1. Create a new file under `src/controllers/` and export a class decorated with `@DController('/path')`.
2. Decorate methods with `@DGet`, `@DPost`, `@DDelete`, ... and parameters with `@DPath`, `@DBody`, `@DQuery` etc.
3. Register the class in `controllers: [...]` in `src/index.ts`.

For body parsing add `@routup/body` (or `@routup/basic`); for query parsing add `@routup/query`. See the [`@routup/decorators` docs](https://github.com/routup/plugins/tree/master/packages/decorators) for the full decorator reference.

## Scripts

| Script | What it does |
|--------|--------------|
| `bun run dev` | Start the server with `--watch` (auto-reload on file changes) |
| `bun start` | Start the server once |
