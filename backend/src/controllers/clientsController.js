const {
    mongo: { clientsModel },
  } = require('../../database/index');

// agrega un nuevo cliente
exports.newClient = async (req, res, next) => {
    const client = new Clients(req.body);

    try {
        // almacenar el registro
        await client.save();
        res.json({ message : 'Se agrego un nuevo cliente' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
}

// Muestra todos los clientes
exports.getClient = async (req, res, next) => {
    try {
        const clients = await Clients.find({});
        res.json(clients);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un cliente por su ID
exports.viewClient = async (req, res, next) => {
    const client = await Clients.findById(req.params.idClient);

    if(!client) {
        res.json({message : 'Ese cliente no existe'});
        next()
    }
    // Mostrar el cliente
    res.json(client);
}

// Actualiza un cliente por su ID
exports.updateClient = async (req, res, next) => {
    try {
        const client = await Clients.findOneAndUpdate({ _id : req.params.idClient }, req.body, {
            new : true
        });
        res.json(client);
    } catch (error) {
        res.send(error);
        next();
    }
}

// Elimina un cliente por su ID 
exports.deleteClient = async (req, res, next) => {
    try {
        await Clients.findOneAndDelete({_id : req.params.idClient});
        res.json({message : 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}