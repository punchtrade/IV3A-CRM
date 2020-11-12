const {
    mongo: { leadsModel },
  } = require('../../database/index');

exports.newLead = async (req, res, next) => {
    const lead = new leadsModel(req.body);
    try {
        await lead.save();
        res.json({message : 'Se agregó un nuevo lead'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los leads
exports.viewAllLead = async (req, res, next) => {
    try {
        const lead = await leadsModel.find({}).populate('user').populate({
            path: 'leads.user',
            model: 'leads'
        });

        res.json(lead);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un lead por su ID
exports.viewLead = async (req, res, next) => {
    const lead = await leadsModel.findById(req.params.idLead).populate('user').populate({
        path: 'leads.user',
        model: 'leads'
    })

    if(!lead) {
        res.json({message : 'Ese  lead no existe'});
        return next();
    }

    // mostrar el lead
    res.json(lead);
}

// Actualizar el lead via ID
exports.updateLead = async (req, res, next) => {
    try {
        let lead = await leadsModel.findOneAndUpdate({_id : req.params.idLead}, req.body, {
            new: true
        } )
        .populate('user')
        .populate({
            path: 'leads.user',
            model: 'leads'
        });

        res.json(lead)
    } catch (error) {
        console.log(error);
        next();
    }
}

// elimina un lead por su id
exports.deleteLead = async (req, res, next) => {
    try {
        await leadsModel.findOneAndDelete({ _id : req.params.idLead});
        res.json({ message : 'El lead se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}