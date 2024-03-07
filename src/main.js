
import { render, RenderPosition} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import Presenter from './presenter/board-presenter.js';
import MockService from './mock/mock-service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const MainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = MainContainer.querySelector('.trip-controls__filters');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);

const PointsPresenter = new Presenter({
  tripEventsContainer,
  destinationsModel,
  offersModel,
  pointsModel
});

render(new TripInfoView(), MainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersContainer);

PointsPresenter.init();

