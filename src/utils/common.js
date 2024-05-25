function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomValue(array) {
  return array[0, getRandomInteger(0, array.length - 1)];
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function capitalizeFirstLetter(string){
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

const isEscKeyDown = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getRandomInteger, getRandomValue, shuffle, capitalizeFirstLetter, isEscKeyDown };
