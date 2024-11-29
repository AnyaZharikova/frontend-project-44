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

const runGame = (description, getRoundData) => {
    const maxRound = 3;
    let correctAnswer = 0;

    const name = whatIsYourName();

    console.log(description);

    while (correctAnswer < maxRound) {
        const [question, expectedAnswer] = getRoundData();
        console.log(`Question: ${question}`);

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

    console.log(`Congratulations, ${name}!`);
};

export { getNum, runGame };