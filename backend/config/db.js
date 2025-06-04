/**
 * This module sets up a connection pool to a MySQL database using the mysql2 library.
 * The connection pool is configured with the database credentials and settings.
 */
require("dotenv").config();
const mysql = require("mysql2/promise");

// Create a connection pool with the specified configuration
const mySqlPool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || ''
});

// Export the connection pool for use in other parts of the application
module.exports = mySqlPool;