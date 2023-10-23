const db = require("../models");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
     try{
        let users = await db.user.findAll();
        res.status(200).json({ error: false, message: 'Listado de usuarios', data: users });
     }
     catch(e){
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

const deleteUser = async (req, res) =>{

    try{
        let idUser = req.params.id;
        await db.user.destroy({where:{id:idUser}});
        res.status(200).json({ error: false, message: 'Usuario Eliminado Exitosamente', data: null });
    }
    catch(e){
        res.status(400).json({ error: true, message: e })
    }
}

const filterData = async (req, res) => {
    console.log(req.params);
    //req.params => parametros dinamicos
    //req.query => parametros por query
    //req.body => parametros por el body
    console.log(req.query);
    res.json({ data: req.params });
};


module.exports = { getAll, postData, filterData, deleteUser }