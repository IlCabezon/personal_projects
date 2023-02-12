require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3001,
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || "43366441ac",
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_DATABASE: process.env.DB_DATABASE || 'pokemon',
  API_URL: process.env.API_URL || '',
};
 