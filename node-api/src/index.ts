import { App, defineCoreHandler, defineErrorHandler, serve } from 'routup';
import { readRequestBody } from '@routup/body';

const router = new App();

router.get('/health', defineCoreHandler(() => ({ status: 'ok' })));

router.post('/echo', defineCoreHandler(async (event) => {
    const body = await readRequestBody(event);
    return { received: body };
}));

router.use(defineErrorHandler((error) => ({
    error: error.message,
})));

const port = Number(process.env.PORT) || 3000;
serve(router, { port });

console.log(`Listening on http://localhost:${port}`);
