export const render = (source, content) => {
  source.innerHTML = content;
};

export const getRandom = (max, min = 0) => Math.random() * (max - min) + min;

export const getRandomIntegerFromInterval = (max, min = 0) => Math.floor(getRandom(max, min));

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

export const getRandomsFromSet = (array, count) => {
  array = array.slice();
  let result = [];
  let randomCount = getRandomIntegerFromInterval(count, 1);
  for (let i = 0; i < randomCount; i++) {
    const randomIndex = getRandomIntegerFromInterval(array.length);
    result.push(array[randomIndex]);
    array.splice(array[randomIndex], 1);
  }
  return result;
};
