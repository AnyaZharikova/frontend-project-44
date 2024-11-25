#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash'
import { whatIsYourName, getUserAnswer, checkAnswer } from '../src/index.js';

//задаем вопрос
const getQuestion = () => {
    const num = _.random(0, 99);
    console.log('Question: ' + num);
    return num;
};
    
//проверяем ответ
const getExpectedAnswer = (num) => {
    const isEven = (num) => num % 2 === 0;
    return isEven(num) ? 'yes' : 'no';
};

//играем
//export const evenGame = () => {
//    const num = getQuestion();
//   const expectedAnswer = getExpectedAnswer(num);

//    return [num, expectedAnswer];
//};

const letsPlay = () => {
    const name = whatIsYourName();
    const maxRound = 3;
    let correctAnswer = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (correctAnswer < maxRound) {
        const num = getQuestion();
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

letsPlay();