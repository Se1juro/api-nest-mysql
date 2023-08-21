import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { DATABASE_CONFIGURATION } from './config/database.configuration';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
