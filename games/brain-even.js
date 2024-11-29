#!/usr/bin/env node

import { getNum, runGame } from '../src/index.js';

const getExpectedAnswer = (num) => {
    const isEven = (num) => num % 2 === 0;
    return isEven(num) ? 'yes' : 'no';
};

const brainEven = () => {
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';

    const getRoundData = () => {
        const num = getNum();
        const expectedAnswer = getExpectedAnswer(num);
        return [num, expectedAnswer];
    };

    runGame(description, getRoundData);
};

brainEven();