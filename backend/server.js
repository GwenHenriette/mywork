"use strict";
require("dotenv").config({ path: __dirname + "/.env" }); // Must be called first
const config = require("./config/env");
const envCheck = require('./utils/environmentCheck')
envCheck()
const express = require("express");
const app = express();
const rateLimit = require('./middleware/rateLimit')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const helmet = require('helmet');
const routesIndex = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swaggerDocument');
const swaggerOptions = require('./swagger/swaggerOptions');
const { sequelize } = require('./models');
const axios = require('axios'); // Import axios

app.use(rateLimit);
app.use(cookieParser());
app.use(cors({ origin: config.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(helmet());
app.use("/api", routesIndex);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

const frontendUrl = process.env.FRONTEND_URL;
const backendUrl = process.env.BACKEND_URL;


const PORT = process.env.API_PORT || 8888;


// Middleware to extract frontend URL from headers
app.use((req, res, next) => {
  const frontendUrl = req.headers['Frontend-Url']; // Correct header key
  // You can now use frontendUrl as needed in your routes
  req.frontendUrl = frontendUrl;
  next();
}); 

const corsOptions = {
  origin: 'https://gpgcdemo.vercel.app/',
  credentials: true,
};


// Example route or controller
app.get('/api/some-endpoint', (req, res) => {
  // Use frontendUrl and backendUrl as needed
  axios.get(`${backendUrl}/api/some-endpoint`, { headers: { 'Frontend-Url': frontendUrl } })
    .then(response => {
      // Handle response
      res.send(response.data);
    })
    .catch(error => {
      // Handle error
      console.error("Error in axios request:", error);
      res.status(500).send('Internal Server Error');
    });
});

try {
  sequelize.authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    });
} catch (err) {
  console.error("Unable to connect to the database:", err);
}

app.listen(PORT, () => console.log("API server started on port " + PORT));
