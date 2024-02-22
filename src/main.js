
import { render, RenderPosition} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import Presenter from './presenter/board-presenter.js';

const MainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = MainContainer.querySelector('.trip-controls__filters');
const PointsPresenter = new Presenter({
  tripEventsContainer
});

render(new TripInfoView(), MainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersContainer);

PointsPresenter.init();

