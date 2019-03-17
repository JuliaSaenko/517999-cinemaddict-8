export const render = (source, content) => {
  source.innerHTML = content;
};

export const getRandom = (max, min = 0) => Math.random() * (max - min) + min;

export const getRandomIntegerFromInterval = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const getRandomElement = (array) => array[getRandomIntegerFromInterval(0, array.length - 1)];

export const getRandomBoolean = () => Math.random() >= 0.5;

export const getRandomFromSet = (set) => {
  let items = Array.from(set);
  return items[Math.floor(Math.random() * items.length)];
};

export const ESC_KEYCODE = 27;
export const ENTER_KEYCODE = 13;


export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
