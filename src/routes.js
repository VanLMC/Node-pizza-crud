

import {Router} from 'express';

const router = Router();

import pizzasController from './controllers/PizzaController.js';

//Todo: Remove the whole bind thing when a orm/database is added
router.get('/pizzas', pizzasController.index.bind(pizzasController)); 
router.post('/pizzas', pizzasController.store.bind(pizzasController));
router.put('/pizzas/:id', pizzasController.update.bind(pizzasController));
router.delete('/pizzas/:id', pizzasController.delete.bind(pizzasController))

export default router;