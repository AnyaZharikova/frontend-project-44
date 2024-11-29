#!/usr/bin/env node

import _ from 'lodash';
import { runGame } from '../src/index.js';

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
    const question = `${hiddenProgression.join(' ')}`;
    //onsole.log(`Question: ${hiddenProgression.join(' ')}`);

    return [question, expectedAnswer];
};

const brainProgression = () => {
    const description = 'What number is missing in the progression?';

    const getRoundData = () => {
        const [question, expectedAnswer] = hideNum();
        return [question, expectedAnswer.toString()];
    };

    runGame(description, getRoundData);
};

brainProgression();