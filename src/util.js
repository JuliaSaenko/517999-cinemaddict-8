export const render = (source, content) => {
  source.innerHTML = content;
};

export const getRandomIntegerFromInterval = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const getRandomElement = (array) => array[getRandomIntegerFromInterval(0, array.length - 1)];

export const getRandomBoolean = () => Math.random() >= 0.5;
