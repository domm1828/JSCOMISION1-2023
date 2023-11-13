const User = require('../../models/mongo/user.mongo');
const bcrypt = require("bcrypt");


const getAll = async (req, res) => {
    try {

        let users = await User.find();
        res.status(200).json({ error: false, message: 'Listado de usuarios', data: users });
    }
    catch (e) {
        console.log(e)
        res.status(400).json({ error: true, message: e })
    }
};

const postData = async (req, res) => {
    try {
        let body = req.body
        body.password = bcrypt.hashSync(body.password, 10);

        let user = new User(body);
        await user.save();

        res.status(200).json({ error: false, message: 'Usuario creado exitosamente', data: user });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};

const deleteUser = async (req, res) => {

    try {
        let id = req.params.id;
        let user = await User.findById(id);
        if (user) {
            await User.findByIdAndDelete(id);
            res.status(200).json({ error: false, message: 'Usuario Eliminado', data: null });
        }
        else {

            res.status(404).json({ error: true, message: 'Id de usuario no existe' })
        }
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
}

const updateUser = async (req, res) => {

    try {
        //update(valores editar, condicion)
        let id = req.params.id;

        let user = await User.findById(id);
        if (user) {

            let body = req.body
            if (body.password) {
                body.password = bcrypt.hashSync(body.password, 10);
            }
            await User.updateOne({ _id: id }, body);
            res.status(200).json({ error: false, message: 'Usuario Modificado', data: null });
        }
        else {
            res.status(404).json({ error: true, message: 'Id de usuario no existe' })
        }


    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
};


const getById = async (req, res) => {
    try {

        let id = req.params.id
        let user = await User.findById(id);
        if (user) {
            res.status(200).json({ error: false, message: 'Usuario', data: user });
        }
        else {
            res.status(404).json({ error: true, message: 'Id de usuario no existe' })
        }
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
}


module.exports = { getAll, postData, updateUser, deleteUser, getById }