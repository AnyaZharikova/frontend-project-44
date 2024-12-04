let seed = Date.now();

const getNum = (min = 1, max = 50) => {
  
  //LCG parametrs from RANDU
  const modulus = 2 ** 31;
  const multiplier = 1103515245;
  const increment = 12345;

  seed = (multiplier * seed + increment) % modulus;
  
  const randomNum = Math.floor((seed / modulus) * (max - min + 1) + min);

  return randomNum;
};

const getOperator = (operators) => {
  //Parametrs from RANDU
  const modulus = 2 ** 31;
  const multiplier = 1103515245;
  const increment = 12345;

  let seed = Date.now();

  seed = (multiplier * seed + increment) % modulus;
  
  const randomIndex = seed % operators.length;

  return operators[randomIndex];
};

export { getNum, getOperator };