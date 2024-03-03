module.exports = {
  "API_PORT": process.env.API_PORT,
  "FRONTEND_URL": process.env.FRONTEND_URL,
  "JWT_SECRET": process.env.JWT_SECRET,
  "JWT_LENGTH_MS": process.env.JWT_LENGTH_MS || 604800000,

  "DB_HOST": process.env.DB_HOST || 'db-mysql-tor1-94527-do-user-15933206-0.c.db.ondigitalocean.com',
  "DB_PORT": process.env.DB_PORT || 25060,
  "DB_DATABASE": process.env.DB_DATABASE || 'gpgc',
  "DB_USERNAME": process.env.DB_USERNAME || 'admin',
  "DB_PASSWORD": process.env.DB_PASSWORD || 'AVNS_7BD50lTrVjdeI0YJp66',
  "DB_DIALECT": process.env.DB_DIALECT || 'mysql'
}