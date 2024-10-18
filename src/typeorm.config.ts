import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username:'postgres',
  password:'1234',
  database: 'logicalsystemdb',
  entities: [
    __dirname + '/*/entities/*.entity.ts',
    __dirname + '/*/entities/*.entity.js',
  ],
  migrationsRun: false,
  logging: false,
  migrationsTableName: 'migration',
  migrations: [
    __dirname + '/migrations/*.ts',
    __dirname + '/migrations/*.js',
  ],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
