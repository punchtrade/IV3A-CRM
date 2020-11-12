const {
    mongo: { uploadsModel },
  } = require('../../database/index');


const multer = require('multer');
const shortid = require('shortid');

const configMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    },
}

// pasar la configuración y el campo
const upload = multer(configMulter).single('image');

// Sube un archivo 
exports.uploadDocument = (req, res, next) => {
    upload(req, res, function(error) {
        if(error) {
            res.json({message: error})
        }
        return next();
    })
}

// agrega nuevos documento
exports.updateDocument = async (req, res, next) => {
    const document = new uploadsModel(req.body);

    try {
        if(req.file.filename) {
            document.image = req.file.filename
        }
        await document.save();
        res.json({message : 'Se agrego un nuevo documento'})
    } catch (error) {
        console.log(error);
        next();
    }
} 


// Muestra todos los documentos
exports.viewAllDocuments = async (req, res, next) => {
    try {
        // obtener todos los documentos
        const documents = await documents.find({});
        res.json(documents);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un documento en especifico por su ID
exports.viewDocument = async (req, res, next) => {
    const document = await uploadsModel.findById(req.params.idDocument);

    if(!document) {
        res.json({message : 'Ese Documento no existe'});
        return next();
    }

    // Mostrar el documento
    res.json(document);
}

// Actualiza un documento via id
exports.updateThisDocument = async (req, res, next) => {
    try {
        // construir un nuevo documento
        let newDocument = req.body;

        // verificar si hay imagen nueva
        if(req.file) {
            newDocument.image = req.file.filename;
        } else {
            let prevDocument = await uploadsModel.findById(req.params.idDocument);
            newDocument.image = prevDocument.image;
        }

        
        let document = await uploadsModel.findOneAndUpdate({_id : req.params.idDocument}, newDocument, {
            new : true,
        });

        res.json(document);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un documento via ID
exports.deleteDocument = async (req, res, next) => {
    try {
        await uploadsModel.findByIdAndDelete({ _id : req.params.idDocument });
        res.json({message : 'El Documento se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.searchDocument = async (req, res, next) => {
    try {
        // obtener el query
        const { query } = req.params;
        const document = await uploadsModel.find({ name: new RegExp(query, 'i') });
        res.json(document);
    } catch (error) {
        console.log(error);
        next();
    }
}