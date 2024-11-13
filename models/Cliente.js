import { pool } from "./db.js";


export class Client {
    constructor(client) {
        this.email = client.email;
        this.name = client.name;
        this.active = client.active;
    }

    async create(newClient, result) {
        let conn;

        try {
            conn = await pool.getConnection();

            console.log("newClient:", newClient); // Para depuración
            
            // Usar la sintaxis VALUES
            const sql = "INSERT INTO clientes (email, name, active) VALUES (?, ?, ?)";
            const values = [newClient.email, newClient.name, newClient.active];

            const res = await conn.query(sql, values); // No desestructurar aquí
            console.log("Client added:", res.insertId); // Cambiar res.insertId a res.affectedRows para obtener el id
            result(null, { id: Number(res.insertId), ...newClient });

        } catch (error) {
            console.error("Error while creating client:", error);
            result(error, null);
        } finally {
            if (conn) conn.release(); // Liberar la conexión
        }
    }

    async remove(id, result) {
        let conn

        try {
            conn = await pool.getConnection()

            const sql = "DELETE FROM clientes WHERE id = ?"
            const res = await conn.query(sql, [id])
            
            if(res.affectedRows == 0) {
                result({ kind: "not_found"}, null)
            }

            console.log("Cliente borrado con exito", id)
            result(null, res)

        } catch (error) {
            result(error, null)
        } finally {
            if (conn) conn.release()
        }
    }

    async removeAll(result) {
        let conn

        try {
            conn = await pool.getConnection()

            const sql = "DELETE FROM clientes"
            const res = await conn.query(sql)
            
            if(res.affectedRows == 0) {
                result({ kind: "not_found"}, null)
            }
            
            console.log("Operacion hecha con exito")

            result(null, res)

        } catch (error) {
            result(error, null)
        } finally {
            if (conn) conn.release()
        }
    }

    async getAll(result) {
        let conn

        try {
            conn = await pool.getConnection()

            const sql = "SELECT * FROM clientes"
            const res = await conn.query(sql)
            
            console.log("Operacion hecha con exito")

            result(null, res)

        } catch (error) {
            result(error, null)
        } finally {
            if (conn) conn.release()
        }
    }

    async getById(id, result) {
        let conn

        try {
            conn = await pool.getConnection()

            const sql = "SELECT * FROM clientes WHERE id = ?"
            const res = await conn.query(sql, [id])
            
            console.log("Operacion hecha con exito")

            result(null, res)

        } catch (error) {
            result(error, null)
        } finally {
            if (conn) conn.release()
        }
    }

    async updateById(data, result) {
        let conn
        console.log(data)

        try {
            conn = await pool.getConnection()

            const sql = "UPDATE clientes SET name = ?, active = ?, email = ? WHERE id = ?"
            const res = await conn.query(sql, [data.name, data.active, data.email, data.id])
            
            console.log("Operacion hecha con exito")

            result(null, { id: Number(res.insertId), ...data });

        } catch (error) {
            result(error, null)
        } finally {
            if (conn) conn.release()
        }
    }
}


