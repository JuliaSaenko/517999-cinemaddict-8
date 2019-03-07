import {getRandomIntegerFromInterval} from './util.js';
import {getRandomElement} from './util.js';
import {getRandomFromSet} from './util.js';

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

const DESCRIPTIONS = [
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

const genres = new Set([
  `Action`,
  `Drama`,
  `Fantasy`,
  `Adventure`,
  `Comedy`,
  `Romance`,
  `History`
]);

const COMMENTS = [`comment`, `big comment`, `small comment`, `good comment`, ` bad comment`];

const Restrictions = {
  RATING: {
    MIN: 1,
    MAX: 10
  },
  YEAR: {
    MIN: 1970,
    MAX: 2019
  },
  DURATION: {
    MIN: 60,
    MAX: 180
  },
  MAX_COMMENTS: 3,
  DESCRIPTION_LENGTH: 3
};

const getRandomComments = () => {
  const comments = new Array(getRandomIntegerFromInterval(0, Restrictions.MAX_COMMENTS))
              .fill()
              .map(() => COMMENTS[getRandomIntegerFromInterval(0, COMMENTS.length - 1)]);
  return comments;
};

const getRandomDescription = () => {
  return new Array(Restrictions.DESCRIPTION_LENGTH)
        .fill()
        .map(() => DESCRIPTIONS[getRandomIntegerFromInterval(0, DESCRIPTIONS.length - 1)])
        .join(` `);
};

const getDataForCard = () => ({
  title: getRandomFromSet(titles),
  rating: getRandomIntegerFromInterval(Restrictions.RATING.MIN, Restrictions.RATING.MAX),
  year: getRandomIntegerFromInterval(Restrictions.YEAR.MIN, Restrictions.YEAR.MAX),
  duration: getRandomIntegerFromInterval(Restrictions.DURATION.MIN, Restrictions.DURATION.MAX),
  genre: getRandomFromSet(genres),
  poster: getRandomElement(posters),
  description: getRandomDescription(),
  comments: getRandomComments()
});

export {getDataForCard};
