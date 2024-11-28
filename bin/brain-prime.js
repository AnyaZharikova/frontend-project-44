#!/usr/bin/env node

import _ from 'lodash';
import { whatIsYourName, getNum, getUserAnswer, checkAnswer } from '../src/index.js';

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
    const name = whatIsYourName();
    const maxRound = 3;
    let correctAnswer = 0;

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    while (correctAnswer < maxRound) {
        const num = getNum();
        console.log(`Question: ${num}`);

        const expectedAnswer = getExpectedAnswer(num);
        const userAnswer = getUserAnswer();
        const isCorrect = checkAnswer(userAnswer, expectedAnswer);

        if (isCorrect) {
            correctAnswer += 1;
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulation, ${name}!`);
};

brainPrime();