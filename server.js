const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Use routes
app.use('/api', routes);

// Sequelize pool config
sequelize.options.pool = {
  max: 20,
  min: 2,
  acquire: 30000,
  idle: 10000,
};

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
