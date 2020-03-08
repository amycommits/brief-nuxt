module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'brief_nuxt',
      user: 'eback',
      password: 'eback',
      schema: 'my_schema'
    },
    migrations: {
      directory: "./server/db/migrations"
    },
    seeds: {
      directory: "./server/db/seeds"
    }
    // ,
    // pool: {
    //   afterCreate: (conn, cb) => {
    //     conn.run('PRAGMA foreign_keys = ON', cb);
    //   }
    // }
  },

  production: {
    client: 'pg',
    debug: true,
    connection: {
      database: process.env.DATABASE_URL,
      schema: process.env.DATABASE_SCHEMA
    },
    // connection: {
    //   database: process.env.DB_NAME,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   schema: process.env.DB_SCHEMA
    // },
    migrations: {
      directory: "./server/db/migrations"
    },
    ssl: true,
    seeds: {
      directory: "./server/db/seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
