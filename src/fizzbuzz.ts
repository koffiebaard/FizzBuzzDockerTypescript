import { FizzBuzzRunner } from './fizzbuzz-runner.js';

class FizzBuzz {
  async fizzbuzz(): Promise<void> {
    const fizzbuzzRunner = new FizzBuzzRunner();
    const fizzbuzz = await fizzbuzzRunner.run('./src/fizzbuzz.sh');
    console.log(fizzbuzz);
  }
}

export { FizzBuzz };
