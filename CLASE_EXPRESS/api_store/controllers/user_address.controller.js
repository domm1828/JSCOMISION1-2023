const db = require("../models"); 
const { Op } = require("sequelize");
const Address = db.users_address;

const getAll = async (req, res) => {
    try {

        let filter = { include: ["addressUsers"]};

        let users = await Address.findAll(filter);
        res.status(200).json({ error: false, message: 'Listado de Direcciones', data: users });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};

const postAddress = async (req, res) => {
    try {

        const addressUser = await Address.create(req.body);
        res.status(200).json({ error: false, message: 'Direcciones creado exitosamente', data: addressUser });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};

const deleteAddress = async (req, res) => {

    try {
        let id = req.params.id;
        let addressUser = await Address.findByPk(idUser);

        if (addressUser) {
            await Address.destroy({ where: { id: id } });
            res.status(200).json({ error: false, message: 'Direcciones Eliminado Exitosamente', data: null });
        }
        else {
            res.status(404).json({ error: true, message: 'Id de Direccion no existe' })
        }
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
}

const updateAddress = async (req, res) => {

    try {
        let id = req.params.id;
        let addressUser = await Address.findByPk(idUser);

        if (addressUser) {
            await Address.update(req.body, { where: { id: id } });
            res.status(200).json({ error: false, message: 'Direccion Modificada Exitosamente', data: null });
        }
        else {
            res.status(404).json({ error: true, message: 'Id de Direccion no existe' })
        }


    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};
const getById = async (req, res)=>{
    try {
        let id = req.params.id;
        let addressUser = await Address.findByPk(id,{include:['addressUsers']});

        if (addressUser) {
              
            res.status(200).json({ error: false, message: 'Direccion Modificada Exitosamente', data: addressUser });
        }
        else {
            res.status(404).json({ error: true, message: 'Id de Direccion no existe' })
        }


    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
}


module.exports = { getAll, postAddress, updateAddress, deleteAddress,getById }