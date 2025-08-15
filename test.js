const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:sahabatchineseindonesia@db.hfxqwffrkrobwnotjvzf.supabase.co:5432/postgres",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
      family: 4,
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected!");
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
})();
