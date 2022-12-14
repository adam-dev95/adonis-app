import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Todos extends BaseSchema {
  protected tableName = "todos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name").notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, false);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
