import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DATABASE_CONFIGURATION: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'daniel',
  password: '%AngeBm2020%',
  database: 'first-api-bd-nest',
  entities: [__dirname + '/**/*.model{.ts,.js}'],
  synchronize: true, // False in production
};
