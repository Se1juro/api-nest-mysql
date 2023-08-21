import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { DATABASE_CONFIGURATION } from './config/database.configuration';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIGURATION),
    UsersModule,
    TasksModule,
    ProductsModule,
  ],
  controllers: [],
})
export class AppModule {
  constructor() {}
}
