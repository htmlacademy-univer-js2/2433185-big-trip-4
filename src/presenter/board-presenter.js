import Sort from '../view/sort-view.js';
import Point from '../view/element-view.js';
import PointEdit from '../view/editor-view.js';
import EventList from '../view/events-list-view.js';
import { render, replace } from '../framework/render.js';
import { isEscape } from '../utils.js';


//отрисовывает все
export default class BoardPresenter {
  #tripContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #points = [];

  constructor({tripContainer, destinationsModel, offersModel, pointsModel})
  {
    this.#tripContainer = tripContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
  }

  #eventList = new EventList();
  #sort = new Sort();

  init() {
    this.#points = [...this.#pointsModel.points];

    render (this.#sort, this.#tripContainer);
    render (this.#eventList, this.#tripContainer);

    this.#points.forEach((point) => {
      const offer = this.#offersModel.getByType(point.type);
      this.#renderPoint(point, offer);
    });
  }

  #renderPoint = (point, offer) => {
    const pointComponent = new Point({
      point,
      offer,
      onRollUpClick: pointRollUpClickHandler
    });
    const pointEditComponent = new PointEdit({
      point: point,
      pointDestination: point.destination,
      pointOffers: offer,
      onRollUpClick: formRollUpClickHandler,
      onSubmitForm: submitFormHandler,
      onDeleteClick: deleteClickHandler
    });

    //заменить точку на форму
    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    //заменить форму на точку
    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    //нажатие кнопки в форме для закрытия
    function onFormKeyDown(event) {
      if (isEscape(event)) {
        event.preventDefault();
        replaceFormToPoint();
      }
    }

    //обработчик нажатия на стрелку в точке
    function pointRollUpClickHandler() {
      replacePointToForm();
      document.addEventListener('keydown', onFormKeyDown);
    }

    //обработчик нажатия на стрелку в форме
    function formRollUpClickHandler() {
      replaceFormToPoint();
      document.removeEventListener('keydown', onFormKeyDown);
    }

    //сохранение значения формы
    function submitFormHandler() {
      replaceFormToPoint();
      document.removeEventListener('keydown', onFormKeyDown);
    }

    //удаление значения формы
    function deleteClickHandler() {
      replaceFormToPoint();
      document.removeEventListener('keydown', onFormKeyDown);
    }

    render(pointComponent, this.#eventList.element);
  };


}
