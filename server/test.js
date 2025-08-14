// test.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  dialectOptions: { ssl: { rejectUnauthorized: false } },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected!');
  } catch (err) {
    console.error('❌ DB connection failed:', err);
  }
})();
