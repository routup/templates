import { Router, defineCoreHandler } from 'routup/cloudflare';

const router = new Router();

router.get('/', defineCoreHandler(() => ({
    message: 'Hello from routup on Cloudflare Workers!',
})));

router.get('/greet/:name', defineCoreHandler((event) => ({
    greeting: `Hello, ${event.params.name}!`,
})));

export default {
    fetch(request: Request): Promise<Response> {
        return router.fetch(request);
    },
};
