#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash'

//функция приветствия
const whatIsYourName = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
};

//задаем вопрос
const getQuestion = () => {
    const num = _.random(0, 99);
    console.log('Question: ' + num);
    return num;
};

//проверяем на четность
const isEven = (num) => num % 2 === 0;

//проверяем ответ
const chekAnswer = (userAnswer, num) => {
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    return [expectedAnswer === userAnswer, expectedAnswer]
};

//играем
const letsPlay = () => {
    const name = whatIsYourName();
    const maxRound = 3;
    let correctAnswer = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (correctAnswer < maxRound) {
        const num = getQuestion();
        const userAnswer = readlineSync.question('Your answer: ');
        const [isCorrect, expectedAnswer] = chekAnswer(userAnswer, num);

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