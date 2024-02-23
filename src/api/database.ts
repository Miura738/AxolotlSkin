import mysql from "mysql"

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_DATABASE = process.env.DATABASE_DATABASE;

const connection = mysql.createConnection({
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_DATABASE
})

export default connection;