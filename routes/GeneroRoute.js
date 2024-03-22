const {
    obtenerGeneros, 
    crearGenero,
    actualizarGenero,
    borrarGenero
} = require('../controllers/GeneroController')

const { Router } = require('express')

const router = Router()


// consultar los generos
router.get('/', obtenerGeneros)

// crear un género
router.post('/', crearGenero)

// actualizar un género por ID
router.put('/:id', actualizarGenero)

// borrar un genero  por ID
router.delete('/:id', borrarGenero)

module.exports = router