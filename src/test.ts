import { User } from './database/models/user.entity';
import { Product } from './database/models/product.entity';
import Knex from 'knex';
import { Model } from 'objection';
// Initialize knex.
const knex = Knex({
  client: 'mysql2',
  useNullAsDefault: true,
  connection: {
    host: '127.0.0.1',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'obj3',
    timezone: '+08:00',
  },
});

// Give the knex instance to objection.
Model.knex(knex);

async function main() {
  const user = await User.query()
    .insertAndFetch({ name: 'jeff' })
    .withGraphFetched('productList');

  const user2 = await User.query()
    .joinRelated('productList')
    .where('productList.id', 1);
  console.log(user2);

  const product2 = await Product.query()
    .joinRelated('user')
    .where('user.id', 2);
  console.log(product2);

  const product = await user.$relatedQuery('productList');
  console.log(user);
  console.log(product);

  const product3 = await Product.query()
    .findOne({ id: 1 })
    .withGraphFetched('user');
  console.log(product3?.user);

  const user3 = await User.query()
    .findOne({ id: 1 })
    .withGraphFetched('productList');
  console.log(user3?.productList);

  await knex.destroy();
}

main();
