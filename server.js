const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/products', (req, res) => {
    res.send('Actualizando products')

    app.get('/products', (req, res) => {
        res.send('elimiando productos ')


app.get('/products', (req, res) => {
    res.send('obteniendo products')
})
app.listen(3000)
console.log(`Server listening on port ${3000}`)

