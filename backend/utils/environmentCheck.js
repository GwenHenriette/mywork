const env = require('../config/env');

module.exports = () => {
  console.log('Checking environment variables...');
  const errors = [];

  if (env.API_PORT === undefined) errors.push('`API_PORT` NOT DEFINED');
  if (env.FRONTEND_URL === undefined) errors.push('`FRONTEND_URL` NOT DEFINED');
  if (env.JWT_SECRET === undefined) errors.push('`JWT_SECRET` NOT DEFINED');
  if (env.JWT_LENGTH_MS === undefined) errors.push('`JWT_LENGTH_MS` NOT DEFINED');

  if (process.env.NODE_ENV.toLowerCase() === 'development') {
    if (env.DB_HOST === undefined) errors.push('`DB_HOST` NOT DEFINED');
    if (env.DB_PORT === undefined) errors.push('`DB_PORT` NOT DEFINED');
    if (env.DB_DATABASE === undefined) errors.push('`DB_DATABASE` NOT DEFINED');
    if (env.DB_USERNAME === undefined) errors.push('`DB_USERNAME` NOT DEFINED');
    if (env.DB_PASSWORD === undefined) errors.push('`DB_PASSWORD` NOT DEFINED');
    if (env.DB_DIALECT === undefined) errors.push('`DB_DIALECT` NOT DEFINED');
  } else if (process.env.NODE_ENV.toLowerCase() === 'production') {
    if (process.env.PROD_DB_HOSTNAME === undefined) errors.push('`PROD_DB_HOSTNAME` NOT DEFINED');
    if (process.env.PROD_DB_PORT === undefined) errors.push('`PROD_DB_PORT` NOT DEFINED');
    if (process.env.PROD_DB_NAME === undefined) errors.push('`PROD_DB_NAME` NOT DEFINED');
    if (process.env.PROD_DB_USERNAME === undefined) errors.push('`PROD_DB_USERNAME` NOT DEFINED');
    if (process.env.PROD_DB_PASSWORD === undefined) errors.push('`PROD_DB_PASSWORD` NOT DEFINED');
  }

  if (errors.length > 0) {
    console.log('\n\nENVIRONMENT VARIABLE ERRORS:');
    errors.forEach((error) => console.log(error));
    console.log('\n\n');
  } else {
    console.log('Environment variables checked.');
  }
};
