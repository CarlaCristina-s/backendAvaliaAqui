import {
    MigrationInterface,
    QueryRunner,
    Table,
  } from "typeorm";

export class CreateProductsTable1744752769926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "products",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
              {
                name: "name",
                type: "varchar",
                length: "200",
                isNullable: false,
              },
              {
                name: "price",
                type: "int",
                isNullable: false,
              },
              {
                name: "description",
                type: "varchar",
                length: "200",
                isNullable: false,
              },
              {
                name: "url_image",
                type: "varchar",
                length: "200",
                isNullable: false,
              },
              {
                name: "category",
                type: "varchar",
                length: "200",
                isNullable: false,
              },
              {  name: "brand",
                type: "varchar",
                length: "200",
                isNullable: false,
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP",
              },
              {
                name: "updated_at",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP",
              },
            ],
          })
        );
    
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
      }

}
