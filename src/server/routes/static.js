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
  res.render("index.html");
});

router.get("/home", function (req, res) {
  if (req.session.user) {
    return res.render("home.html", { name: req.session.user.name });
  }
  res.redirect("/");
});

// router.get("/newClient", )

module.exports = router;