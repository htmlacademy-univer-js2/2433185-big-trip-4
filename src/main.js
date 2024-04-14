import TripInfo from './view/trip-info-view.js';
import Filter from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import MockService from './mock/mock-service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import { RenderPosition, render } from './framework/render.js';


const tripInfo = document.querySelector('.trip-main');
const filter = tripInfo.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const eventList = main.querySelector('.trip-events');


const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);
const boardPresenter = new BoardPresenter({

  tripContainer: eventList,
  destinationsModel,
  offersModel,
  pointsModel

});

render(new TripInfo(), tripInfo, RenderPosition.AFTERBEGIN);
render(new Filter(), filter);

boardPresenter.init();
