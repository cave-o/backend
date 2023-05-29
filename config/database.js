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
      host: env('PGHOST', '0.0.0.0'),
      port: env.int('PGPORT', 6546),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'abhtZtpOoqXvg4EUnyJb'),
      schema: env('DATABASE_SCHEMA', 'public'), // Optional
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
