var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let users = [{ "last_name": "Allou", "first_name": "Abdelhafid" },
     { "last_name": "Coulibaly", "first_name": "Adama" },
     { "last_name": "Alla", "first_name": "ismail" }]
    res.send(users);
});

module.exports = router;