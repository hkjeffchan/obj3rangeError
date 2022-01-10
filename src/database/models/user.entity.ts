import { Model, RelationMappings, RelationMappingsThunk } from 'objection';

import { BaseModel } from './_base.entity';
import { Product } from './product.entity';

export class User extends BaseModel {
  static tableName = 'user';
  name: string;

  productList?: Product[];

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    productList: {
      relation: Model.HasManyRelation,
      modelClass: () => Product,
      join: {
        from: 'user.id',
        to: 'product.userId',
      },
    },
  };
}
