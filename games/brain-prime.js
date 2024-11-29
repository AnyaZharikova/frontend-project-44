#!/usr/bin/env node

import { getNum, runGame } from '../src/index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

const getExpectedAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getRoundData = () => {
    const num = getNum();
    const expectedAnswer = getExpectedAnswer(num);
    return [num, expectedAnswer];
  };

  runGame(description, getRoundData);
};

brainPrime();
