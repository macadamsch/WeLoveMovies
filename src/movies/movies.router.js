const express = require('express');
const router = express.Router();
const moviesController = require('../movies/movies.controller');
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router.route("/:movieId/theaters")
    .get(moviesController.listTheaters)
    .all(methodNotAllowed);

router.route("/:movieId/reviews")
    .get(moviesController.listReviews)
    .all(methodNotAllowed);

router.route("/:movieId")
    .get(moviesController.read)
    .all(methodNotAllowed);

router.route("/")
    .get(moviesController.list)
    .all(methodNotAllowed);

module.exports = router;