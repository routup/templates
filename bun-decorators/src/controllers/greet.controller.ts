import { DController, DGet, DPath } from '@routup/decorators';

@DController('/greet')
export class GreetController {
    @DGet('')
    hello() {
        return { message: 'Hello, World!' };
    }

    @DGet('/:name')
    byName(@DPath('name') name: string) {
        return { message: `Hello, ${name}!` };
    }
}
