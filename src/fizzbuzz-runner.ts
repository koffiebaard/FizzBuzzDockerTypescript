import { spawn } from 'child_process';

class FizzBuzzRunner {
  async run(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const process = spawn(command);
      let result = '';

      process.stdout.on('data', (data) => {
        result += data.toString();
      });

      process.on('close', () => {
        resolve(result);
      });

      process.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export { FizzBuzzRunner };
