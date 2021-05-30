const express = require('express');
const {v4: uuid}  = require('uuid');

const app = express();
const port = 3000;


app.use(express.json());
//const PizzaControler = require('./controllers/pizzaController');

const pizzas = [];

app.get('/pizzas', (req, res) => {
    
    
    res.json(pizzas);
})
app.post('/pizzas', (req, res) => {
    const {name} = req.body;

    const pizza = {
        id: uuid(),
        name,
    }

    pizzas.push(pizza);
    res.json(pizza);
})

app.put('/pizzas/:id', (req, res) => {
    const {id} = req.params;
    res.json({id: id});
})

app.patch('/pizzas/:id', (req, res) => {
    const {id} = req.params;
    
    res.json({id: id});
})

app.delete('/pizzas/:id', (req, res) => {
    res.json('Pizza 1, pizza 2, pizza 3');
})


app.listen(port, () => {
    console.log(`Api iniciada na porta ${port}`);
});