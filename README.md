# FizzBuzz using Typescript, Bash, Docker and Docker-compose
FizzBuzz finally done properly. That's right, you can sleep easy from now on. You're welcome.

## Why?
It's so incredibly user-friendly. Easy to read. And scalable! Efficient too. Just look at how few lines there are in the Dockerfile. If anything, this is a pretty good indication of a small image being built.

## Run FizzBuzz
It's really easy to use:

```bash
docker-compose up
```

## Example run
```bash
$ docker-compose up         
Creating network "fizbuzz-docker-typescript_default" with the default driver
Creating fizzbuzz-docker-typescript ... done
Attaching to fizzbuzz-docker-typescript
fizzbuzz-docker-typescript    | 
fizzbuzz-docker-typescript    | > fizbuzz-docker-typescript@1.0.0 start
fizzbuzz-docker-typescript    | > node build/src/main.js
fizzbuzz-docker-typescript    | 
fizzbuzz-docker-typescript    | 1
fizzbuzz-docker-typescript    | 2
fizzbuzz-docker-typescript    | Fizz
fizzbuzz-docker-typescript    | 4
fizzbuzz-docker-typescript    | Buzz
fizzbuzz-docker-typescript    | Fizz
fizzbuzz-docker-typescript    | 7
fizzbuzz-docker-typescript    | 8
fizzbuzz-docker-typescript    | Fizz
fizzbuzz-docker-typescript    | Buzz
fizzbuzz-docker-typescript    | 11
fizzbuzz-docker-typescript    | Fizz
fizzbuzz-docker-typescript    | 13
fizzbuzz-docker-typescript    | 14
fizzbuzz-docker-typescript    | FizzBuzz
fizzbuzz-docker-typescript    | 16
fizzbuzz-docker-typescript    | 17
fizzbuzz-docker-typescript    | Fizz
fizzbuzz-docker-typescript    | 19
fizzbuzz-docker-typescript    | Buzz
fizzbuzz-docker-typescript    | 
fizzbuzz-docker-typescript exited with code 0
```
