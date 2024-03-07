import { getRandomInteger } from '../utils.js';
import { PRICE } from './const.js';

function generatePoint(type, destinationId, offerId) {
  return{
    id: crypto.randomUUID(),
    price: getRandomInteger(PRICE.MIN, PRICE.MAX),
    destination: destinationId,
    offers: offerId,
  };

}
export {generatePoint};
