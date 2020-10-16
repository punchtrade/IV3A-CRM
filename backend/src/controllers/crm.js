const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const config = require("../../configs/index");
const {
    mongo: { crmModel },
} = require('../../database/index');


//crm dates
// router.post("/crm", async (req, res, next) => {
//     console.log(req.body);
//     crmModel.find({ id: req.body.id })
//         .exec()
//         .then((crm) => {
//             if (crm.length >= 1) {
//                 return res.status(409).json({
//                     message: "Date already exist",
//                 });
//             } else {
//                 const crm = new crmModel({
//                     _id: new mongoose.Types.ObjectId(),
//                     id: req.body.id,
//                     date: req.body.date,
//                     dueDate: req.body.dueDate,
//                     select: req.body.select,
//                     text: req.body.text,
//                 });
//                 crm
//                     .save()
//                     .then((result) => {
//                         console.log(result);
//                         res.status(201).json({
//                             message: "Crm created",
//                         });
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                         res.status(500).json({
//                             error: err,
//                         });
//                     });
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(422).json({
//                 error: err,
//             });
//         });
// });
// router.post("/crm", (req, res, next) => {
//     console.log(req.file);
//     crmModel({id: req.body.id});
//     const dates = new crmModel({
//       _id: new mongoose.Types.ObjectId(),
//       id: req.body.id,
//       date: req.body.date,
//       dueDate: req.body.dueDate,
//       select: req.body.select,
//       text: req.body.text,
//     });
//     dates
//       .save()
//       .then((result) => {
//         console.log(result);
//         res.status(201).json({
//           message: "Upload successfully",
//           createdDates: {
//             id: result.id,
//             date: result.date,
//             dueDate: result.dueDate,
//             select: result.select,
//             text: result.text,
//             _id: result._id,
//             request: {
//               type: "POST",
//               url: "http://localhost:9000/crm" + result._id,
//             },
//           },
//         });
//       })
//     //   .catch((err) => {
//     //     console.log(500).json({
//     //       error: err,
//     //     });
//     //   });
//   });

router.post('/crm', async (req, res) => {
    try {
     const sendDates = await crmModel.find(req.body);
         const dates = await crmModel({
      _id: new mongoose.Types.ObjectId(),
      id: req.body.id,
      date: req.body.date,
      dueDate: req.body.dueDate,
      select: req.body.select,
      text: req.body.text,
    });
     res.json(dates);
    } catch (err) {
     res.json({ error: err.message || err.toString() });
    }
   });


module.exports = router;