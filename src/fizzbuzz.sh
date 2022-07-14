#!/bin/bash

for number in {1..20}; do
  [[ $(expr $number % 3) -ne 0 && $(expr $number % 5) -ne 0 ]] && printf $number;
  [[ $(expr $number % 3) -eq 0 ]] && printf "Fizz";
  [[ $(expr $number % 5) -eq 0 ]] && printf "Buzz";
  printf "\n"
done
