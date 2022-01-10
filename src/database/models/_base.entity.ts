import { Model } from 'objection';
export class BaseModel extends Model {
  id: number;

  static get modelPaths() {
    return [__dirname];
  }

  static get useLimitInFirst() {
    return true;
  }
}

module.exports = {
  BaseModel,
};
