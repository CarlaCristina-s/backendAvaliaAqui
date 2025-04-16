import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateReviewsTable1744761562956 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reviews",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "product_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "feedback",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "experience",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "recommend",
            type: "boolean",
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

    await queryRunner.createForeignKey(
      "reviews",
      new TableForeignKey({
        name: "product_fk",
        columnNames: ["product_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("reviews", "product_fk");
    await queryRunner.dropTable("reviews");
  }
}
