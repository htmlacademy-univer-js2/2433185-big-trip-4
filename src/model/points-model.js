import { POINT_TYPES } from '../const.js';
import { generatePoint } from '../mock/point.js';
import { getRandomInteger, getRandomValue } from '../utils/common.js';
//import Observable from '../framework/observable.js';


export default class PointsModel {
  #points = [];
  #service = null;

  constructor(destinationsModel, offersModel) {
    const pointCount = { MIN: 0, MAX: 5 };

    this.points = Array.from({ length: getRandomInteger(pointCount.MIN, pointCount.MAX) }, () => {
      const destination = getRandomValue(destinationsModel.get());
      const type = getRandomValue(POINT_TYPES);
      const offers = offersModel.getByType(type).slice(0, getRandomInteger(0, 3));
      return generatePoint(destination.id, type, offers.map((offer) => offer.id));
    });
  }

  get() {
    return this.points;
  }

  getById(id) {
    return this.points.find((point) => point.id === id);
  }

  update(updateType, point) {
    const updatedPoint = this.#service.updatedPoint(point);
    //this.#points = updateItem(this.#points, updatedPoint);
    this._notify(updateType, updatedPoint);
  }

  add(updateType, point) {
    const addedPoint = this.#service.addPoint(point);
    this.#points.push(addedPoint);
    this._notify(updateType, addedPoint);
  }

  delete(updateType, point) {
    this.#service.deletePoint(point);
    this.#points = this.points.filter((pointItem) => pointItem.id !== point.id);
    this._notify(updateType);
  }
}
