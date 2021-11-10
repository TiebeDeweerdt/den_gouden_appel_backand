const mysql = require('mysql2/promise');

const pool = await mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'den_gouden_appel',
	connectionLimit: 10,
});