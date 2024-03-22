const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial es requerido'],
        unique: [true, 'Serial ya existe ']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido']
    },
    sinopsis: {
        type: String
    },
    url: {
        type: String
    },
    image: {
        type: String
    },
    fechaCreacion: {
        type: Date
    },
    fechaActualizacion: {
        type: Date
    },
    fechaEstreno: {
        type: Date
    },
    genero: { 
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    }
})

module.exports = model('Media', MediaSchema)