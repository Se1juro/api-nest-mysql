import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EStatusTask } from './enums/task.enum';

@Entity({ name: 'tasks' })
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  @Column({ name: 'status', type: 'int' })
  status: EStatusTask;

  @Column({ type: 'datetime' })
  createAt: Date;

  @Column({ type: 'datetime' })
  updatedAt: Date;

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
