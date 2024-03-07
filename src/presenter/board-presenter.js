import { render } from '../render.js';
import EventsListView from '../view/events-list-view.js';
import SortingView from '../view/sort-view.js';
import EventItemView from '../view/element-view.js';
import PointEditorView from '../view/editor-view.js';


export default class Presenter {
  eventsList = new EventsListView();
  sortingComponent = new SortingView();

  constructor({ tripEventsContainer }) {
    this.tripEventsContainer = tripEventsContainer;
  }

  init() {
    render(this.sortingComponent, this.tripEventsContainer);
    render(this.eventsList, this.tripEventsContainer);
    render(new PointEditorView(), this.eventsList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventItemView(), this.eventsList.getElement());
    }
  }
}
