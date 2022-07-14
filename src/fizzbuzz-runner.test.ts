import { FizzBuzzRunner } from './fizzbuzz-runner.js';

test("Confirm FizzBuzzRunner's amazing awesomeness", async () => {
  const fizzbuzzRunner = new FizzBuzzRunner();
  const fizzbuzz = await fizzbuzzRunner.run('./src/fizzbuzz.sh');

  expect(fizzbuzz).toBe(`1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
`);
});
