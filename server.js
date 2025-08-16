const express = require("express");
const cors = require("cors"); // <-- import cors
const { sequelize } = require("./models");
const routes = require("./routes");

const app = express();

// Enable CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "x-user"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/api", routes);

// Sequelize pool config
sequelize.options.pool = {
  max: 20,
  min: 2,
  acquire: 30000,
  idle: 10000,
};

// Test DB connection first
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
