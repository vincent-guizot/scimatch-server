import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "sci_db", // database name
  "sci_db_user", // username
  "i68nfVlGRoe0PznZEinNxeWgBEHXJa4j", // password
  {
    host: "dpg-d3hckop5pdvs73f624cg-a.singapore-postgres.render.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Render requires SSL
      },
    },
    logging: false, // disable SQL logging
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Successfully connected to Render PostgreSQL!");
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await sequelize.close();
  }
})();
