import { Router, defineCoreHandler, defineErrorHandler, serve } from 'routup';
import { useRequestBody } from '@routup/body';

const router = new Router();

router.get('/health', defineCoreHandler(() => ({ status: 'ok' })));

router.post('/echo', defineCoreHandler(async (event) => {
    const body = await useRequestBody(event);
    return { received: body };
}));

router.use(defineErrorHandler((error) => ({
    error: error.message,
})));

const port = Number(process.env.PORT) || 3000;
serve(router, { port });

console.log(`Listening on http://localhost:${port}`);
