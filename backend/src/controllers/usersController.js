const {
    mongo: { usersModel },
} = require('../../database/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.registerUser = async (req, res) => {

    // leer los datos del usuario y colocarlos en Usuarios
    // const user = new usersModel(req.body);
    const user = new usersModel({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idCard: req.body.idCard,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date,
    });
    // user.password = await user.encryptPassword(user.password);
    user.password = await bcrypt.hash(req.body.password, 12);
    try {
        await user.save();
        res.json({ message: 'Usuario Creado Correctamente' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'Hubo un error' });
    }

}

exports.authenticateUser = async (req, res, next) => {
    // buscar el usuario
    const { email, password } = req.body;
    const user = await usersModel.findOne({ email });

    if (!user) {
        // Si el usuario no existe
        await res.status(401).json({ mmessage: 'Ese usuario no existe' });
        next();
    } else {
        // El usuario existe, verificar si el password es correcto o incorrecto
        if (!bcrypt.compareSync(password, user.password)) {
            // si el password es incorrecto
            await res.status(401).json({ message: 'Password Incorrecto' });
            next();
        } else {
            // password correcto, firmar el token
            const token = jwt.sign({
                email: user.email,
                nombre: user.nombre,
                id: user._id
            },
                'SECRET_KEY',
                {
                    expiresIn: '24h'
                });

            // retornar el TOKEN
            res.json({ token });
        }


    }
}