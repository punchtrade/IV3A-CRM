const {
    mongo: { orderModel },
  } = require('../../database/index');

exports.newOrder = async (req, res, next) => {
    const order = new orderModel(req.body);
    try {
        await order.save();
        res.json({message : 'Se agregó un nuevo pedido definitivo'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los pedidos
exports.viewAllOrder = async (req, res, next) => {
    try {
        const order = await orderModel.find({}).populate('client').populate({
            path: 'order.product',
            model: 'order'
        });

        res.json(order);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un pedido por su ID
exports.viewOrder = async (req, res, next) => {
    const order = await orderModel.findById(req.params.idOrder).populate('client').populate({
        path: 'order.product',
        model: 'order'
    })

    if(!preOrder) {
        res.json({message : 'Ese  pedido definitivo no existe'});
        return next();
    }

    // mostrar el pedido
    res.json(order);
}

// Actualizar el pedido via ID
exports.updateOrder = async (req, res, next) => {
    try {
        let order = await orderModel.findOneAndUpdate({_id : req.params.idOrder}, req.body, {
            new: true
        } )
        .populate('client')
        .populate({
            path: 'order.product',
            model: 'order'
        });

        res.json(order)
    } catch (error) {
        console.log(error);
        next();
    }
}

// elimina un pedido por su id
exports.deleteOrder = async (req, res, next) => {
    try {
        await orderModel.findOneAndDelete({ _id : req.params.idOrder});
        res.json({ message : 'El pedido definitivo se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}