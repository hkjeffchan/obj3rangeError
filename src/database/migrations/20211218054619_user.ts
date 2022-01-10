import { Knex } from 'knex';

//  await knex.schema.raw(`ALTER TABLE ${tableName} ADD FULLTEXT INDEX \`descTcIdx\` (\`descTc\`)`);

const tableName = 'user';

export async function up(knex: Knex) {
  await knex.schema.createTable(tableName, (t) => {
    t.increments().unsigned().primary();
    t.string('name');
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable(tableName);
}
