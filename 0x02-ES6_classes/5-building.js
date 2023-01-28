/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (typeof this.evacuationWarningMessage !== 'function' && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
