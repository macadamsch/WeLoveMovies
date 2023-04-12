const express = require('express');
const router = express.Router();
const theaterController = require('../theaters/theaters.controller');
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router.route('/')
    .get(theaterController.list)
    .all(methodNotAllowed);

module.exports = router;