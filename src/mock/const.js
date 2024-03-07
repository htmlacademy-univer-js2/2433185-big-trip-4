const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const CITIES = [
  'Geneva',
  'Moscow',
  'Tokio',
  'New York',
  'Los Angeles',
  'Berlin',
];

const PRICE = { MIN: 10, MAX:1000 };

const DURATION = {
  MIN: 59,
  HOUR: 6,
  DAY: 5
};

const TYPES = ['taxi', 'bus', 'train', 'ship','drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const FILTERS = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',
};

const POINT_COUNT = 5;

const DESTINATION_COUNT = 5;

const OFFER_COUNT = 5;

export {CITIES, DESCRIPTION, PRICE, DURATION, TYPES, FILTERS, POINT_COUNT, DESTINATION_COUNT, OFFER_COUNT};
