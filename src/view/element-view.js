import { createEventItemTemplate } from '../template/element-template';
import { createElement } from '../render.js';

export default class EventItemView {
  getTemplate() {
    return createEventItemTemplate();
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
