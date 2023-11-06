const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = db.user;

const login = async (req, res) => {
    try {
       
        await User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {
          
            if (!user) {
             return   res.status(401).json({ error: true, message: 'Error user and password not working' })
            }
            
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
       
            if (!passwordIsValid) {
                return  res.status(401).json({ error: true, message: 'Error password and user  not working' })
            }
         
            var tokenAccess = jwt.sign({ id: user.id }, 'ABCDEFJHIJKLMONPQRSTUVWXYZ', {
                expiresIn: 86400
            });

            let data = { user, token: tokenAccess }

            return res.status(200).json({ error: false, message: 'Listado de usuarios', data: data });

        })
    }
    catch (e) {
        res.status(400).json({ error: true, message: e })
    }
}

module.exports = login