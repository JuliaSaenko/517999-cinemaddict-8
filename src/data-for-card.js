import {getRandomIntegerFromInterval} from './util.js';
import {getRandomElement} from './util.js';
import {getRandomBoolean} from './util.js';
import {getRandomFromSet} from './util.js';
import moment from 'moment';

// const ACTORS_MAX = 10;
// const GENRES_MAX = 3;
const USER_DEFAULT_RATING = 5;

const Time = {
  YEAR: 365,
  MS_IN_DAY: 86400000,
  HOUR: 3600000,
};

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

const actors = new Set([
  `Ewan McGregor`,
  `Natalie Portman`,
  `Hayden Christensen`,
  `Samuel L. Jackson`,
  `Elijah Wood`,
  `Ian McKellen`,
  `Viggo Mortensen`,
  `Orlando Bloom`,
  `Sean Bean`,
  `Sean Astin`,
  `Christopher Lee`,
  `Cate Blanchett`
]);

const countries = new Set([
  `USA`,
  `Canada`,
  `Russia`,
  `Germany`,
  `France`,
  `Spain`,
  `Italy`,
  `Australia`
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

const ageLimit = [
  `0+`,
  `6+`,
  `12+`,
  `16+`,
  `18+`,
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

const getRandomDescription = () => {
  return new Array(Restrictions.DESCRIPTION_LENGTH)
        .fill()
        .map(() => DESCRIPTIONS[getRandomIntegerFromInterval(0, DESCRIPTIONS.length - 1)])
        .join(` `);
};

const getDataForCard = () => ({
  poster: getRandomElement(posters),
  title: getRandomFromSet(titles),
  actors: getRandomFromSet(actors),
  country: getRandomFromSet(countries),
  rating: getRandomIntegerFromInterval(Restrictions.RATING.MIN, Restrictions.RATING.MAX),
  userRating: USER_DEFAULT_RATING,
  releaseDate: Date.now() + getRandomIntegerFromInterval(Time.YEAR + 1, (-Time.YEAR) * 15) * getRandomIntegerFromInterval(Time.MS_IN_DAY),
  duration: getRandomIntegerFromInterval(Time.HOUR * 2.5, Time.HOUR),
  genre: getRandomFromSet(genres),
  ageLimit: getRandomElement(ageLimit),
  description: getRandomDescription(),
  comments: [
    {
      author: `Tim Macoveev`,
      date: moment(),
      text: `So long-long story, boring!`,
      emoji: `😴`
    }
  ],
  isInWatchlist: getRandomBoolean(),
  isWatched: getRandomBoolean(),
  isFavorite: getRandomBoolean()
});

export {getDataForCard};
