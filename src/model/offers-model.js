import { getRandomValue } from '../utils';

//описание пункта назначения
export default class OffersModel {
  #service = null;
  #offers = null;

  constructor(service){
    this.#service = service;
    this.#offers = this.#service.offers;
  }


  get offers(){
    return this.#offers;
  }


  getByType(type){
    return this.#offers.find((offer) => offer.type === type).offers;
  }

  getRandomOffer(){
    return getRandomValue(this.#offers);
  }

}
