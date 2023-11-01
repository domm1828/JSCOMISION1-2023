const db = require("../models");
const fs = require('fs');
const { Op } = require("sequelize");
const Product = db.product;


const getAll = async (req, res) => {
    try {
        let products = await Product.findAll();
        res.status(200).json({ error: false, message: 'Listado de Productos', data: products });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }

}

const createProduct = async (req, res) => {


    try {
        let body = req.body;
        if (req.file) {
            body.photo = req.file.filename;
        }
        let products = await Product.create(body);
        res.status(200).json({ error: false, message: 'Producto Agregado', data: products });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
}

const updateProduct = async (req, res) => {

    try {

        let id = req.params.id
        let product = await Product.findByPk(id);
        if (product) {
            let body = req.body;
            if (req.file) {
                body.photo = req.file.filename;
                if (product.photo != null) {
                    fs.unlinkSync('public/products/' + product.photo);
                }
            }
            Product.update(body, { where: { id: id } });
            res.status(200).json({ error: false, message: 'Producto Modificado', data: null });

        }
        else {
            res.status(404).json({ error: true, message: 'ID de producto no encontrado', data: null });
        }

        /*  await Product.findAll({ where: { id: id } }).then(async (result) => {
  
              if (result.length > 0) { 
                  let body = req.body;
                  if (req.file) {
                      body.photo = req.file.filename;
                      if(result[0]['photo'] != null){
                          fs.unlinkSync('public/products/'+result[0]['photo']);
                      }
                  }
  
                  Product.update(body,{ where: { id: id } });
                  res.status(200).json({ error: false, message: 'Producto Modificado', data: null });
              }
              else {
                  res.status(404).json({ error: true, message: 'ID de producto no encontrado', data: null });
              }
          })*/

    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }

}

const deleteProduct = async (req, res) => {

    try {

        let id = req.params.id
        await Product.findAll({ where: { id: id } }).then(async (result) => {

            if (result.length > 0) {
                Product.destroy({ where: { id: id } });
                res.status(200).json({ error: false, message: 'Producto Elimininado', data: null });
            }
            else {
                res.status(404).json({ error: true, message: 'ID de producto no encontrado', data: null });
            }
        })

    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }

}

module.exports = { getAll, createProduct, updateProduct, deleteProduct }
