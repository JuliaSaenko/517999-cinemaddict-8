import {getRandomIntegerFromInterval} from './util.js';
import {getRandomElement} from './util.js';

const DESCRIPTION_COUNT = 3;
const COMMENTS_MAX = 23;
const RATING_MAX = 10;

const posters = [
  `accused.jpg`,
  `blackmail.jpg`,
  `blue-blazes.jpg`,
  `fuga-da-new-york.jpg`,
  `moonrise.jpg`,
  `three-friends.jpg`,
];

const titles = new Set([
  `The Shawshank Redemption`,
  `The Green Mile`,
  `The Dark Knight`,
  `Up`,
  `Coco`,
  `The Intouchables`,
  `The Lord of the Rings: The Fellowship of the Ring`,
  `The Lord of the Rings: The Two Towers`,
  `The Lord of the Rings: The Return of the King`,
  `The Hobbit: An Unexpected Journey`,
  `The Hobbit: The Desolation of Smaug`,
  `The Hobbit: The Battle of the Five Armies`,
  `Green Book`,
  `Forrest Gump`,

]);

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus`
];

const years = new Set([
  `2018`,
  `2012`,
  `2005`,
  `2004`,
  `2003`,
  `2002`,
  `2001`
]);

const durations = new Set([
  `1h 60m`,
  `1h 30m`,
  `2h 30m`,
  `2h 20m`,
  `2h 00m`,
  `1h 33m`,
  `2h 10m`
]);

const genres = new Set([
  `Action`,
  `Drama`,
  `Fantasy`,
  `Adventure`,
  `Comedy`,
  `Romance`,
  `History`
]);

const dataForCard = () => ({
  poster: getRandomElement(posters),
  title: getRandomElement([...titles]),
  rating: getRandomIntegerFromInterval(1, RATING_MAX),
  year: getRandomElement([...years]),
  duration: getRandomElement([...durations]),
  genre: getRandomElement([...genres]),
  description: getRandomIntegerFromInterval(descriptions, DESCRIPTION_COUNT, 1).join(` `),
  comments: getRandomElement(COMMENTS_MAX)
});

export {dataForCard};
