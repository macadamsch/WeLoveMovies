const service = require("./reviews.service");
const asyncErrorBoundary = require("../utils/errors/asyncErrorBoundary");

const paramsCheck = async (req, res, next) => {
    const { reviewId } = req.params;
    const match = await service.read(reviewId);
    if (match.length === 0 || !reviewId)
        return next({
            status: 404,
            message: "Review cannot be found.",
        });
    res.locals.review = match[0];
    next();
};

function bodyCheck(req, res, next) {
    const { data: { score, content } = {}} = req.body;
    let updateObj = {};
    if (!score && !content)
        return next({
            status: 400,
            message: "Missing score or content in body"
        });
    if (score) updateObj.score = score;
    if (content) updateObj.content = content;
    res.locals.update = updateObj;
    next();
};

async function list(req, res) {
    const reviews = await service.list();
    res.status(200).json({ data: reviews });
};

function read(req, res) {
    res.status(200).json({ data: res.locals.review });
};

async function update(req, res) {
    const { critic_id, review_id }  = res.locals.review;
    const update = res.locals.update;
    if (!update.hasOwnProperty('review_id')) {
        update.review_id = review_id;
    }
    await service.update(update, review_id);
    const updatedReview = await service.read(review_id);
    const critic = await service.getCritic(critic_id);
    res.status(200).json({ data: { ...updatedReview[0], critic: critic[0] } });
};

async function destroy(req, res) {
    const { review_id } = res.locals.review;
    await service.destroy(review_id);
    res.sendStatus(204);
};

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(paramsCheck), read],
    update: [asyncErrorBoundary(paramsCheck), bodyCheck, asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(paramsCheck), asyncErrorBoundary(destroy)]
}