const Genero = require('../models/genero')
const {request, response} = require('express')

const obtenerGeneros = async (
        req = request, res = response
    ) => {
        try{
            const { estado } = req.query

            const generos = await Genero.find({ estado }) // SELECT * FROM generos WHERE estado=?
        
            return res.json(generos)

        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}


const crearGenero = async (
    req = request, res = response
) => {
    try{
        const body = req.body
        //console.log(body)
        //const { nombre, descripcion } = body

        const genero = new Genero(body)

        await genero.save()

        return res.status(201).json(genero)

    } catch(e){
        return res.status(500).json({
            message: e
        })
    }
}


const actualizarGenero = async (
    req = request, res = response
    ) => {
        try{
            const id = req.params.id
            const body = req.body
            console.log(body)
            //const { nombre, descripcion } = body
            body.fechaActualizacion = new Date()
            const genero = 
                await Genero.findByIdAndUpdate(id, body, {new: true})
            return res.status(201).json(genero)
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}
//const obtenerPorId

const borrarGenero= async (
    req = request, res = response
    ) => {
        try{
            const id = req.params.id

            await Genero.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Borrado"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

module.exports = {
    obtenerGeneros,
    crearGenero,
    actualizarGenero,
    borrarGenero
}