import _ from 'lodash';
import { whatIsYourName, getUserAnswer, checkAnswer } from '../src/index.js';

//задаем вопрос
const randomExpression = () => {
    const num1 = _.random(0, 20);
    const num2 = _.random(0, 20);
    const operators = ['+', '-', '*'];
    const randomOperator = _.sample(operators);
    //const question = `${num1} ${randomOperator} ${num2}`;
    console.log(`Question: ${num1} ${randomOperator} ${num2}`);
    const expression = [num1, num2, randomOperator];

    return expression;
};

//ожидаемый ответ
const calculateResult = (num1, num2, randomOperator) => {
    const question = `${num1} ${randomOperator} ${num2}`;
    let expectedAnswer;
    switch (randomOperator) {
        case '+':
            expectedAnswer = num1 + num2;
            break;
        case '-':
            expectedAnswer = num1 - num2;
            break;
        case '*':
            expectedAnswer = num1 * num2;
            break;
        default:
            expectedAnswer = null;
    }

    return [question, expectedAnswer];
};

//играем

//export const calculatingGame = () => {
//    const [num1, num2, randomOperator] = randomExpression();
//    const [question, expectedAnswer] = calculateResult(num1, num2, randomOperator);

//    return [question, expectedAnswer];
//};


const brainCalc = () => {
    const maxRound = 3;
    let correctAnswer = 0;

    const name = whatIsYourName();

    console.log('What is the result of the expression?');

    while (correctAnswer < maxRound) {
        const [num1, num2, randomOperator] = randomExpression();
        const [question, expectedAnswer] = calculateResult(num1, num2, randomOperator);
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

brainCalc();