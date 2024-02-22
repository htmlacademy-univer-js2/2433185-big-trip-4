import { createPointEditorTemplate } from '../template/editor-template';
import { createElement } from '../render.js';

export default class PointEditorView {
  getTemplate() {
    return createPointEditorTemplate();
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
