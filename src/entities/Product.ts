import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 200, nullable: false })
  name: string;

  @Column({ type: "int", nullable: false })
  price: number;

  @Column({ type: "varchar", length: 200, nullable: false })
  description: string;

  @Column({ type: "varchar", length: 200, nullable: false })
  url_image: string;

  @Column({ type: "varchar", length: 200, nullable: false})
  category: string;

  @Column({ type: "varchar", length: 200, nullable: false })
  brand: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
