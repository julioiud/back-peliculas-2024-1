const mongoose = require('mongoose')

const mongoConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // TODO: COLOCAR AQUI PARAMETROS
        })
        console.log('Conexion exitosa!')
    } catch(e){
        console.log('Error de conexion', e)
        throw new Error('Error de conexion')
    }
}

module.exports = { mongoConection }
