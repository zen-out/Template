require("dotenv").config();
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: __dirname + "/dbknex/migrations",
    },
    seeds: {
      directory: __dirname + "/dbknex/seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/dbknex/migrations",
    },
    seeds: {
      directory: __dirname + "/dbknex/seeds",
    },
  },
};
