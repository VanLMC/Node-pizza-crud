import {v4 as uuid} from 'uuid';

class PizzaController {
    constructor(){
        this.pizzas = [];
    }

    async index(req, res){
        res.json(this.pizzas);
    }


    async store(req, res){
        const {name} = req.body;

        const pizza = {
            id: uuid(),
            name,
        }
    
        this.pizzas.push(pizza);
        res.json(pizza);
    }

    async update(req, res){
        
        const {name} = req.body;
        const {id} = req.params;

        const pizzaIndex = this.pizzas.findIndex((pizza) => pizza.id === id);

        if(pizzaIndex < 0) res.json('pizza não encontrada');
        const pizza = this.pizzas[pizzaIndex];

        pizza.name = name;

        this.pizzas[pizzaIndex] = pizza;
        
        res.json(this.pizzas);
    }


    async delete(req, res){

        const {id} = req.params;

        this.pizzas = this.pizzas.filter((pizza => pizza.id !== id));

        res.json(this.pizzas);
    }

}


export default new PizzaController();