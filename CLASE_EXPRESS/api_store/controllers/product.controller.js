const db = require("../models");
const { Op } = require("sequelize");
const Product = db.product;

const getAll = async (req,res) =>{
    try{  
        let prodcuts = await Product.findAll();
        res.status(200).json({ error: false, message: 'Listado de Productos', data: prodcuts });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }

}

const createProduct = async(req,res) =>{
}

const updateProduct = async(req,res) =>{
}

const deleteProduct = async(req,res) =>{
    
    try{  

        let id=req.params.id
        await Product.findAll({where:{id:id}}).then( async(result)=>{

            if(result.length > 0){
                Product.destroy({where:{id:id}});
                res.status(200).json({ error: false, message: 'Producto Elimininado', data: null });
            }
            else{
                res.status(404).json({ error: true, message: 'ID de producto no encontrado', data: null });  
            }
        })
       
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }

}

module.exports = {getAll,createProduct,updateProduct,deleteProduct}
