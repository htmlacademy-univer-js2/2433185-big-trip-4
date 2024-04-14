import { getRandomValue } from '../utils';

//модели пункта назначения
export default class DestinationsModel{
  #service = null;
  #destinations = null;

  constructor(service){
    this.#service = service;
    this.#destinations = this.#service.destinations;
  }


  get destinations(){
    return this.#destinations;
  }


  getByID(id){
    return this.#destinations.find((destination) => destination.id === id);
  }

  getRandomDestination(){
    return getRandomValue(this.#destinations);
  }
}
