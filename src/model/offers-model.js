import Observable from '../framework/observable.js';
import { UpdateType } from '../const.js';

export default class OffersModel extends Observable {
  #offers = [];
  #offersApiService = null;

  constructor(offersApiService) {
    super();
    this.#offersApiService = offersApiService;
  }

  init = async () => {
    try {
      this.#offers = await this.#offersApiService.offers;
      this.#offers = this.offers;
      this._notify(UpdateType.INIT, {data: this.offers});
    } catch (err) {
      this.#offers = [];
      this._notify(UpdateType.INIT, {error: err});
    }
  };

  get offers() {
    return this.#offers;
  }

  getByType(type) {
    return this.#offers.find((offers) => offers.type === type.toLowerCase()).offers;
  }
}
