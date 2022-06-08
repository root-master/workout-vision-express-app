const { MovementVideoSchemaValidation } = require("../validations/MovementVideoSchemaValidation");
const MovementVideoModel = require("../models/MovementVideo.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.MovementVideoController = {
    getPublicMovementVideos: async (req, res, next) => {
        try {
            const allMovementVideos = await MovementVideoModel.findAllPublicMovementVideos();
            res.status(202).json({ allMovementVideos });
        } catch (error) {
            next(error);
        }
    },
    postMovementVideo: async (req, res, next) => {
        try {
            const movementVideoInfo = await MovementVideoSchemaValidation().validateAsync(
                req.body,
                {
                    abortEarly: true,
                }
            );
            const newMovementVideo = await MovementVideoModel.postMovementVideo(movementVideoInfo);
            res.status(201).json({ newMovementVideo: newMovementVideo });
        } catch (error) {
            if (error.isJoi) {
                next(createHttpError.BadRequest(error.message));
            } else {
                next(error);
            }
        }
    },
    getMovementVideo: async (req, res, next) => {
        try {
            const { movementVideoId } = req.params;
            if (!movementVideoId)
                throw createHttpError.BadRequest("MovementVideo ID not found");
            const movementVideo = await MovementVideoModel.findMovementVideoById(movementVideoId);
            if (!movementVideo) throw createHttpError.NotFound("Movement Not Found");
            res.status(200).json({ success: true, movementVideo });
        } catch (error) {
            next(error);
        }
    },
    deleteMovementVideo: async (req, res, next) => {
        try {
            const { movementVideoId } = req.params;
            if (!movementVideoId)
                throw createHttpError.BadRequest("MovementVideo ID not found");
            const deletedMovementVideo = await MovementVideoModel.deleteMovementById(movementVideoId);
            res.status(200).json({ deletedMovementVideo });
            s;
        } catch (error) {
            next(error);
        }
    },
    updateMovementVideo: async (req, res, next) => {
        try {
            const { movementVideo: movementVideo, movementVideoId } = req.body;
            const movementVideoOmitted = await MovementVideoSchemaValidation().validateAsync(
                omit(movementVideo, ["createdAt", "updatedAt"])
            );
            const updatedMovementVideo = await MovementVideoModel.updateMovementById(
                movementVideoOmitted,
                movementVideoId
            );
            if (!updatedMovementVideo)
                throw createHttpError.NotFound("Movement Not Found");
            res.status(200).json({ updatedMovementVideo });
        } catch (error) {
            next(error);
        }
    },
};
