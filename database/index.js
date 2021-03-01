const mysql = require('mysql');

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB
} = process.env;

const pool = mysql.createPool({
  host: MYSQL_HOST || 'localhost',
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || '',
  database: MYSQL_DB || 'trulia_fec'
});

module.exports = pool;