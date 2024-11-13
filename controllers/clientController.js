import { Client } from "../models/Cliente.js";

export const create = (req, res) => {
    const cliente = new Client({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    })

    cliente.create(cliente, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Algo paso mal"
            })

            return
        }

        res.send(data)
    })
}

export const remove = (req, res) => {
    const client = new Client("", "", "")

    client.remove(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                message: "Algo paso mal"
            })

            return
        }

        res.send({
            message: "usuario borrado con exito",
        })
    })
}

export const removeAll = (req, res) => {
    const cliente = new Client("", "", "")
    cliente.removeAll((err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                message: "Algo paso mal"
            })

            return
        }

        res.send({
            message: "todos los clientes han sido eliminados",
        })
    })
}

export const findAll = (req, res) => {
    const cliente = new Client("", "", "")
    cliente.getAll((err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                message: "Algo paso mal"
            })

            return
        }

        res.send(data)
    })
}
export const findById = (req, res) => {
    const cliente = new Client("", "", "")

    cliente.getById(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                message: "Algo paso mal"
            })

            return
        }

        res.send(data)
    })
}

export const update = (req, res) => {
    const cliente = new Client({
        name: req.body.name,
        email: req.body.email,
        active: req.body.active
    })

    cliente.updateById({...cliente, id: req.body.id}, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send({
                message: "Algo paso mal"
            })

            return
        }

        res.send(data)
    })
}