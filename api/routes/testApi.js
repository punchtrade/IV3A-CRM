var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send("L'API fonctionne correctement ...parse fois");
});

module.exports = router;