import { createSortingTemplate } from '../template/sort-template';
import { createElement } from '../render.js';


export default class SortingView {
  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
