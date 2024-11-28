#!/usr/bin/env node

import _ from 'lodash';
import { whatIsYourName, getUserAnswer, checkAnswer } from '../src/index.js';

const progression = () => {
    const step = _.random(1, 9);
    const firstNum = _.random(0, 20);
    const lengthOfProgression = _.random(5, 10);
    
    let nextNum = firstNum;
    let arithmeticProgression = [firstNum];

    for (let i = 1; i < lengthOfProgression; i += 1) {
        nextNum += step;
        arithmeticProgression.push(nextNum);
    }

    return arithmeticProgression;
};

const hideNum = () => {
    const arithmeticProgression = progression();
    const randomIndex = _.random(0, arithmeticProgression.length - 1);
    
    const expectedAnswer = arithmeticProgression[randomIndex];

    const hiddenProgression = [...arithmeticProgression];
    hiddenProgression[randomIndex] = '..'; 

    console.log(`Question: ${hiddenProgression.join(' ')}`);

    return expectedAnswer;
};

const brainProgression = () => {
    const maxRound = 3;
    let correctAnswer = 0;

    const name = whatIsYourName();

    console.log('What number is missing in the progression?');

    while (correctAnswer < maxRound) {
        const expectedAnswer = hideNum();
        const userAnswer = Number(getUserAnswer());
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

brainProgression();