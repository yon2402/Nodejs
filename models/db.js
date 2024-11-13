import mariadb from "mariadb";
import { config } from "../db.config.js";

const pool = mariadb.createPool(config)

pool.getConnection().then(async (conn) => {
const rows = await conn.query('SELECT 1 as val')
    console.log(rows)
})
export { pool }