//const path = require('path');

//module.exports = ({ env }) => ({
//  connection: {
//    client: 'sqlite',
//    connection: {
//      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//    },
//    useNullAsDefault: true,
//  },
//});
//


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST'),
      port: env.int('PGPORT'),
      database: env('PGDATABASE'),
      user: env('PGUSER'),
      password: env('PGPASSWORD'),
      schema: env('DATABASE_SCHEMA', 'public'), // Optional
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
