const express = require('express')
const { mongoConection } = require('./databases/config')
const dotenv = require('dotenv').config()

mongoConection()
const app = express()

app.get('/hola', (req, res) => {
    return res.json({
        msj: 'Hola'
    })
})

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    })
})

module.exports = app