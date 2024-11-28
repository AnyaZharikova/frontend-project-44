import readlineSync from 'readline-sync';
import _ from 'lodash'

//функция приветствия
const whatIsYourName = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
};

const getNum = () => {
    const num = _.random(1, 50);
    return num;
};

//получение ответа от пользователя
const getUserAnswer = () => readlineSync.question('Your answer: ');

//проверка ответа пользователя
const checkAnswer = (userAnswer, expectedAnswer) => expectedAnswer === userAnswer;

export { whatIsYourName, getNum, getUserAnswer, checkAnswer };