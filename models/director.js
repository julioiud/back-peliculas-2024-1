const { Schema, model } = require('mongoose')

const DirectorSchema = Schema({
    nombre: {
        type: String,
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
        type: Date
    }
})

module.exports = model('Director', DirectorSchema)