import express from "express";

import morgan from "morgan";

const app = express()

const products = [ {
    "id": "Albert",
    "name": "Baran",
    "age": "27"
}]
app.use(morgan('dev'))
app.use(express.json(products))

app.get('/products', (req, res) =>{
    res.json(products)
})

app.get('/products', (req, res) =>{
    res.send('Obteniendo products')
})

app.get('/products', (req, res) =>{
    res.send('Obteniendo products')
})

app.get('/products', (req, res) =>{
    res.send('Obteniendo products')
})

app.listen(3000)

console.log(`server on port ${3000}`)
