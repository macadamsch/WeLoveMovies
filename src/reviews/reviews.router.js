const express = require('express');
const router = express.Router();
const reviewsController = require('../reviews/reviews.controller');
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router.route("/:reviewId")
    .get(reviewsController.read)
    .put(reviewsController.update)
    .delete(reviewsController.delete)
    .all(methodNotAllowed);

router.route("/")
    .all(methodNotAllowed);

module.exports = router;