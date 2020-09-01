const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("../configs/default");
const verifyToken = require("./verifyToken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const User = require("../models/users");
const Clients = require("../models/clients");
const Uploads = require("../models/uploads");
const Car = require("../models/car");
const clients = require("../models/clients");
const Leads = require("../models/leads");

//const uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 500,
  },
  fileFilter: fileFilter,
});

//register
router.post("/register", async (req, res, next) => {
  try {
    const { firstName, lastName, idCard, email, password } = req.body;
    // console.log(firstName, lastName, idCard, email, password );
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      idCard: req.body.idCard,
      email: req.body.email,
      password: req.body.password,
      date: req.body.date,
    });
    user.password = await user.encryptPassword(user.password);
    await user.save();
    //create a token
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, //expires in 24 hours
    });

    res.json({ auth: true, token });
  } catch (e) {
    console.log(e);
    res.status(500).send("There was a problem registering your user");
  }
});

//login
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send("The email doesn't exists");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).json({ auth: false, token: null });
  }
  // console.log(validPassword);

  const token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 86400, //24 hours
  });

  res.status(200).json({ auth: true, token });
});

//dashboard
router.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({ message: "dashboard"});
});

//created Client
router.post("/newClient", (req, res, next) => {
  console.log(req.body);
  Clients.find({ email: req.body.email })
    .exec()
    .then((client) => {
      if (client.length >= 1) {
        return res.status(409).json({
          message: "Client already exist",
        });
      } else {
        const client = new Clients({
          _id: new mongoose.Types.ObjectId(),
          id: req.body.id,
          treatment: req.body.treatment,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          card: req.body.card,
          telephone: req.body.telephone,
          email: req.body.email,
          address: req.body.address,
          city: req.body.city,
          postalCode: req.body.postalCode,
          bankAccount: req.body.bankAccount,
          bankAccount2: req.body.bankAccount2,
          bankAccount3: req.body.bankAccount3,
          nameOfBank: req.body.nameOfBank,
          iban: req.body.iban,
          swiftCode: req.body.swiftCode,
          carCatalogue: req.body.carCatalogue,
          price1: req.body.price1,
          brand: req.body.brand,
          model: req.body.model,
          fuel: req.body.fuel,
          comment: req.body.comment,
          images: req.body.images,
          date: req.body.date,
        });
        client
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Client created",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(422).json({
        error: err,
      });
    });
});

//created car
router.post("/car", (req, res, next) => {
  console.log(req.body);
  Car.find({ brand: req.body.brand })
    .exec()
    .then((car) => {
      if (car.length >= 1) {
        return res.status(409).json({
          message: "Car already exist",
        });
      } else {
        const car = new Car({
          _id: new mongoose.Types.ObjectId(),
          // id: req.body.id,
          carCatalogue: req.body.carCatalogue,
          price1: req.body.price1,
          carOrder: req.body.carOrder,
          price2: req.body.price2,
          brand: req.body.brand,
          model: req.body.model,
          fuel: req.body.fuel,
          serialNumber: req.body.serialNumber,
          // description: req.body.description,
          // type: req.body.type,
          // typeSeries: req.body.typeSeries,
          // body: req.body.body,
          // power: req.body.power,
          // places: req.body.places,
          // grossWeight: req.body.grossWeight,
          // mma: req.body.mma,
          // payload: req.body.payload,
          // tara: req.body.tara,
          // previousNumber: req.body.previousNumber,
          // firstRegistration: req.body.firstRegistration,
          // dateManufacture: req.body.dateManufacture,
          date: req.body.date,
        });
        car
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Car created",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(422).json({
        error: err,
      });
    });
});

//search client
router.get('/search', (req, res) => {
  console.info('obtener datos clientes');
  Clients.find()
  .populate('Clients', 'clientsSchema')
  .exec((err, clients) => {
    if(err) {
      console.error(err.message);
      return res.status(500).json({error: err.message});
    }
    return res.status(200).json(clients);
  });
});
router.put('/search',(req,res,next) =>{
  const newclient = {_id:req.params._id };
Clients.updateOne(newclient,
  {firstName: req.body.firstName,email: req.body.email})
.then(document => 
  {if(!document){return res.status(404).end();}return res.status(200)
  .json(document);}).catch(err => next(err));})

// router.put("/search", (req, res) => {
//   Clients.updateOne({ id: req.params.id, "Clients.id": req.params.id }).exec(function(err,result){
// if(err)throw err;
// if(result){
// result.body="new value";
// result.save()
// console.log("new value")
// }
// else{console.log("not found")}
// })
// });

// router.put('/search', (req, res, next) => {
//   Clients.updateOne(req.params.id, req.body, function (err, result) {
//    if (err) return next(err);
//    res.status(200).json(result);
//    console.log(req.body);
//   });
//  });

//   router.put('/search', function(req, res, next) {
//   Clients.updateOne(req.body, {
//    $unset: {id: req.params.id}
//   }).then(function() {
//    res.send({'success': true});
//   }, function() {
//    res.send({'success': false});
//   });
//  });

router.delete('/search', (req, res, next) => {
  Clients.findOneAndDelete(req.params.id, req.body, function (err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

//leads
router.get('/leads', (req, res) => {
  console.info('obtener datos clientes');
  Leads.find()
  .populate('Leads', 'leadsSchema')
  .exec((err, leads) => {
    if(err) {
      console.error(err.message);
      return res.status(500).json({error: err.message});
    }
    return res.status(200).json(leads);
  });
});
router.post('/newClient', (req, res, next) => {
  Leads.updateOne(req.params.id, req.body, function (err, result) {
   if (err) return next(err);
   res.status(200).json(result);
   console.log(req.body);
  });
 });
 router.delete('/leads', (req, res, next) => {
  Leads.findOneAndDelete(req.params.id, req.body, function (err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

//upload documents
router.post("/upload", (req, res, next) => {
  console.log(req.file);
  const images = new Uploads({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    desc: req.body.desc,
    img: req.body.img,
    path: req.body.path,
    date: req.body.date,
  });
  images
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Upload successfully",
        createdImage: {
          name: result.name,
          desc: result.desc,
          img: result.img,
          path: result.path,
          _id: result._id,
          request: {
            type: "POST",
            url: "http://localhost:9000/upload" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(500).json({
        error: err,
      });
    });
});

router.get("/upload", (req, res, next) => {
  Uploads.find().then((data) => {
    res.status(200).json({
      message: "Uploads list retrieved successfully!",
      uploads: data,
    });
  });
});

//logout
router.get("/logout", (req, res) => {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
