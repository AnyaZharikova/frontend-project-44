#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash'

const whatIsYourName = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
};

const isEven = (num) => num % 2 === 0; // проверка на четность, функция вернет true или false

const yourAnswer = () => {
    
    const num = _.random(0, 99);
    console.log('Question: ' + num);
    const userAnswer = readlineSync.question('Your answer: ');

    const expectedAnswer = isEven(num) ? 'yes' : 'no'; //ожидаемый ответ примет значение 'yes', если число четное, 'no', если нечетное
    
    //ответ пользователя должен быть равен ожидаемому ответу
    if (expectedAnswer === userAnswer) {
        const isCorrect = [true, userAnswer]
        return isCorrect;
    } else {
        const isCorrect = [false, userAnswer, expectedAnswer]
        return isCorrect;
    }
};

const letsPlay = () => {
    const name = whatIsYourName();
    const maxRound = 3; //раунды 0, 1, 2
    let correctAnswer = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    while (correctAnswer < maxRound) {
        const [isCorrect, userAnswer, expectedAnswer] = yourAnswer();

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