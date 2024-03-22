const { Schema, model } = require('mongoose')

const GeneroSchema = Schema({
    nombre: {
        type: String,
        unique: [true, 'Nombre es único'],
        required: [true, 'Nombre es requerido'],
        minLength: 1
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    descripcion: {
        type: String
    },
})

module.exports = model('Genero', GeneroSchema)