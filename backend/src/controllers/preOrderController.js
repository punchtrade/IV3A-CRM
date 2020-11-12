const {
    mongo: { preOrderModel },
  } = require('../../database/index');

exports.newPreOrder = async (req, res, next) => {
    const preOrder = new preOrderModel(req.body);
    try {
        await preOrder.save();
        res.json({message : 'Se agregó un nuevo pedido'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los pedidos
exports.viewAllPreOrder = async (req, res, next) => {
    try {
        const preOrder = await preOrderModel.find({}).populate('client').populate({
            path: 'preOrder.product',
            model: 'preOrder'
        });

        res.json(preOrder);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un pedido por su ID
exports.viewPreOrder = async (req, res, next) => {
    const preOrder = await preOrderModel.findById(req.params.idPreOrder).populate('client').populate({
        path: 'preOrder.product',
        model: 'preOrder'
    })

    if(!preOrder) {
        res.json({message : 'Ese no pedido no existe'});
        return next();
    }

    // mostrar el pedido
    res.json(preOrder);
}

// Actualizar el pedido via ID
exports.updatePreOrder = async (req, res, next) => {
    try {
        let preOrder = await preOrderModel.findOneAndUpdate({_id : req.params.idPreOrder}, req.body, {
            new: true
        } )
        .populate('client')
        .populate({
            path: 'preOrder.product',
            model: 'preOrder'
        });

        res.json(preOrder)
    } catch (error) {
        console.log(error);
        next();
    }
}

// elimina un pedido por su id
exports.deletePreOrder = async (req, res, next) => {
    try {
        await preOrderModel.findOneAndDelete({ _id : req.params.idPreOrder});
        res.json({ message : 'El pedido se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}