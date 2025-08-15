require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "sahabatchineseindonesia",
    database: process.env.DB_NAME || "postgres",
    host: process.env.DB_HOST || "db.hfxqwffrkrobwnotjvzf.supabase.co",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "sahabatchineseindonesia",
    database: process.env.DB_NAME || "postgres",
    host: process.env.DB_HOST || "db.hfxqwffrkrobwnotjvzf.supabase.co",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
