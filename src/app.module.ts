import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'daniel',
      password: '%AngeBm2020%',
      database: 'first-api-bd-nest',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true, // False in production
    }),
    UsersModule,
    TasksModule,
  ],
  controllers: [],
})
export class AppModule {
  constructor() {}
}
