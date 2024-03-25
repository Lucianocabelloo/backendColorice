import Color from "../database/models/color.js"

export const listarColores = async (req,res) =>{
    try {
        const colores = await Color.find()
        res.status(200).json(colores)
    } catch (error) {
        console.error("Ha ocurrido un error en listar los colores", error)
    }}

export const listarColor = async (req,res)=>{
    try {
        const id = req.params.id
        const colorBuscado = await Color.findById(id)

        res.status(200).json(colorBuscado)
    } catch (error) {
        console.error("Ha habido un error al buscar el color", error)
    }
}
export const crearColor = async (req,res)=>{
    try {
        const colorNuevo = new Color(req.body)
        await colorNuevo.save()

        res.status(201).json({
            mensaje: "El color fue dado de alta correctamente"
        })
    } catch (error) {
        console.error("Ha habido un error al crear el color", error)
        res.status(400).json({
            mensaje:"El producto no pudo ser dado de alta"
        })
    }
}
export const editarColor = async (req,res)=>{
    try {
        const id = req.params.id

        const colorBuscado = await Color.findById(id)
        if (!colorBuscado) {
            return res.status(404).json({
                mensaje: 'No se ha encontrado el color a editar'
            })
        }

        await Color.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "Se edito el color con exito"
        })
    } catch (error) {
        console.error("Ha habido un error al intentar editar el producto", error)
        res.status(404).json({
            mensaje: "Error al intentar editar el producto"
        })
    }
}
export const eliminarColor = async (req,res)=>{
    try {
        const id = req.params.id

        const colorBuscado = await Color.findById(id)
        if (!colorBuscado) {
            return res.status(404).json({
                mensaje: 'No se ha encontrado el color a eliminar'
            })
        }

        await Color.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "El producto fue eliminado correctamente"
        })
    } catch (error) {
        console.error("Ha habido un error al intentar eliminar", error)
        res.status(404).json({
            mensaje: "Ha habido un error al eliminar el color"
        })
    }
}