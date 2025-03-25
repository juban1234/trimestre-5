import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'localhost',
    user: 'prueva',
    password: '',
    database: 'tiendadb',
    connectionLimit: 10,
    queueLimit: 0
});

export default db;
