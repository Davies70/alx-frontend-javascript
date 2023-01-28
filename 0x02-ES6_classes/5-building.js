/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    const message = 'extending Building must override evacuationWarningMessage';
    throw new Error(message);
  }

  get sqft() {
    return this._sqft;
  }
}
