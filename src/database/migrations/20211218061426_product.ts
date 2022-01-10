import { Knex } from 'knex';

//  await knex.schema.raw(`ALTER TABLE ${tableName} ADD FULLTEXT INDEX \`descTcIdx\` (\`descTc\`)`);

const tableName = 'product';

export async function up(knex: Knex) {
  await knex.schema.createTable(tableName, (t) => {
    t.increments().unsigned().primary();
    t.integer('userId').unsigned().index('userIdIdx');
    t.decimal('price', 10, 2);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable(tableName);
}
