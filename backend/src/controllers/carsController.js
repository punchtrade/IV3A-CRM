const {
    mongo: { carModel },
  } = require('../../database/index');

exports.newCar = async (req, res, next) => {
    const car = new carModel(req.body);
    try {
        await car.save();
        res.json({message : 'Se agregó un nuevo coche'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los coches
exports.getCar = async (req, res, next) => {
    try {
        const cars = await Car.find({}).populate('client').populate({
            path: 'car.product',
            model: 'Car'
        });

        res.json(cars);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un coche por su ID
exports.viewCar = async (req, res, next) => {
    const car = await Car.findById(req.params.idCar).populate('client').populate({
        path: 'car.product',
        model: 'Car'
    })

    if(!car) {
        res.json({message : 'Ese no coche no existe'});
        return next();
    }

    // mostrar el coche
    res.json(car);
}

// Actualizar el coche via ID
exports.updateCar = async (req, res, next) => {
    try {
        let car = await Car.findOneAndUpdate({_id : req.params.idCar}, req.body, {
            new: true
        } )
        .populate('client')
        .populate({
            path: 'car.product',
            model: 'Car'
        });

        res.json(car)
    } catch (error) {
        console.log(error);
        next();
    }
}

// elimina un coche por su id
exports.deleteCar = async (req, res, next) => {
    try {
        await Car.findOneAndDelete({ _id : req.params.idCar});
        res.json({ message : 'El coche se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}