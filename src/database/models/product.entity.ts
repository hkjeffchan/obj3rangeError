import { Model, RelationMappings, RelationMappingsThunk } from 'objection';

import { BaseModel } from './_base.entity';
import { User } from './user.entity';

export class Product extends BaseModel {
  static tableName = 'product';
  price: number;

  user?: User;

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: () => User,
      join: {
        from: 'product.userId',
        to: 'user.id',
      },
    },
  };
}
