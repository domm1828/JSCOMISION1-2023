const db = require("../models");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const getAll = async (req, res) => {
    try {

        let filter = {};
        let optionSql = [];

        if (req.query.name) {
            optionSql.push({
                name: {
                    [Op.like]: `%${req.query.name}%`
                }
            });
        }
        if (req.query.last_name) {
            optionSql.push({
                last_name: {
                    [Op.like]: `%${req.query.last_name}%`
                }
            });
        }
        if(optionSql.length > 0){
            filter ={
                where: {
                    [Op.or]: optionSql
                } 
            }
        } 
        let users = await db.user.findAll(filter);
        res.status(200).json({ error: false, message: 'Listado de usuarios', data: users });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};

const postData = async (req, res) => {
    try {
        let body = req.body
        body.password = bcrypt.hashSync(body.password, 10);
        const user = await db.user.create(body);
        res.status(200).json({ error: false, message: 'Usuario creado exitosamente', data: user });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};

const deleteUser = async (req, res) => {

    try {
        let idUser = req.params.id;
        await db.user.findAll({ where: { id: idUser } }).then(async (result) => {

            if (result.length > 0) {
                await db.user.destroy({ where: { id: idUser } });
                res.status(200).json({ error: false, message: 'Usuario Eliminado Exitosamente', data: null });
            }
            else {
                res.status(404).json({ error: true, message: 'Id de usuario no existe' })
            }
        })
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
}

const updateUser = async (req, res) => {

    try {
        //update(valores editar, condicion)
        let id = req.params.id;

        await db.user.findAll({ where: { id: id } }).then(async (result) => {

            if (result.length > 0) {
                let body = req.body
                if (body.password) {
                    body.password = bcrypt.hashSync(body.password, 10);
                }
                await db.user.update(body, { where: { id: id } });
                res.status(200).json({ error: false, message: 'Usuario Editado Exitosamente', data: null });
            }
            else {
                res.status(404).json({ error: true, message: 'Id de usuario no existe' })
            }
        })

    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};


module.exports = { getAll, postData, updateUser, deleteUser }