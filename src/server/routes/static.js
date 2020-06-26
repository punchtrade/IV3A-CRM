const express = require("express");
const app = express();
const router = express.Router();


// static routes
// router.get("/", (req, res) => {
//   if (req.session.user) {
//     return res.redirect("/home");
//   }
//   res.render("login.jsx");
// });

// router.get("/home", function (req, res) {
//   if (req.session.user) {
//     return res.render("home.jsx", { name: req.session.user.name });
//   }
//   res.redirect("/");
// });

router.get("/", (req, res) => {
  if (req.session.user) {
    return res.redirect("/home");
  }
  res.render("home.jsx");
});

router.get("/login", (req, res) => {
  if (req.session.user) {
    return res.render("login.jsx", { name: req.session.user.name });
  }
  res.redirect("/");
});

// router.get("/clients", function (req, res) {
//   if (req.session.client) {
//     return res.render("newClient.html");
//   }
//   res.redirect("/");
// });
// router.get("/clients", (req, res, next) => {
//   res.render("newClient.html");
// });

module.exports = router;