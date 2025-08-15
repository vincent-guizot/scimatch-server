require("dotenv").config();

const common = {
  port: process.env.DB_PORT || 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  family: 4, // <-- force IPv4 here
};

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "sahabatchineseindonesia",
    database: process.env.DB_NAME || "postgres",
    host: process.env.DB_HOST || "db.hfxqwffrkrobwnotjvzf.supabase.co",
    ...common,
  },
  test: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "sahabatchineseindonesia",
    database: process.env.DB_NAME || "postgres",
    host: process.env.DB_HOST || "db.hfxqwffrkrobwnotjvzf.supabase.co",
    ...common,
  },
  production: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "sahabatchineseindonesia",
    database: process.env.DB_NAME || "postgres",
    host: process.env.DB_HOST || "db.hfxqwffrkrobwnotjvzf.supabase.co",
    ...common,
  },
};
