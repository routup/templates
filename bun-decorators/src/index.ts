import 'reflect-metadata';

import { App, serve } from 'routup';
import { decorators } from '@routup/decorators';

import { GreetController } from './controllers/greet.controller.ts';

const router = new App();

router.use(decorators({
    controllers: [
        GreetController,
    ],
}));

const port = Number(process.env.PORT) || 3000;
serve(router, { port });

console.log(`Listening on http://localhost:${port}`);
