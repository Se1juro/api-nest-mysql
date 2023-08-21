import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'datetime' })
  createAt: Date;

  @Column({ type: 'datetime' })
  updatedAt: Date;

  @Column({ nullable: true })
  authStrategy: string;

  @BeforeInsert()
  updateDatesWhenCreate() {
    this.createAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  updateDateWhenUpdate() {
    this.updatedAt = new Date();
  }
}
