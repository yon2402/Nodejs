import { Router } from "express";
import { create, findAll, findById, remove, removeAll, update } from "../controllers/clientController.js";

const router = Router()

// Create cliente
router.post('/', create)

// Get all clients
router.get('/', findAll)

// Get one cliente by id
router.get('/:id', findById)

// Update
router.put('/', update)

// Delete a client by id
router.delete('/:id', remove)

// Delete all clients
router.delete('/', removeAll)


export default router