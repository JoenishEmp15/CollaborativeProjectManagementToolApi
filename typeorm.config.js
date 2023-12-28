module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Hosting@123',
    database: 'collaborative-project-management-tool-DB',
    synchronize: true,
    logging: true,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  };
   
