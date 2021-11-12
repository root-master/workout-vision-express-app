const { movementSchemaValidation } = require("../helpers/schemaValidations");
const movementModel = require("../models/Movement.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.movementController = {
  getMovements: async (req, res, next) => {
    try {
      const allMovements = await movementModel.findAllMovements();
      res.status(202).json({ allMovements });
    } catch (error) {
      next(error);
    }
  },
  postMovement: async (req, res, next) => {
    try {
      const movementInfo = await movementSchemaValidation().validateAsync(
        req.body,
        {
          abortEarly: true,
        }
      );
      const newMovement = await movementModel.postMovement(movementInfo);
      res.status(201).json({ newMovementInfo: newMovement });
    } catch (error) {
      if (error.isJoi) {
        next(createHttpError.BadRequest(error.message));
      } else {
        next(error);
      }
    }
  },
  getMovement: async (req, res, next) => {
    try {
      const { movementId } = req.params;
      if (!movementId)
        throw createHttpError.BadRequest("Movement ID not found");
      const movement = await movementModel.findMovementById(movementId);
      if (!movement) throw createHttpError.NotFound("Movement Not Found");
      res.status(200).json({ success: true, movement });
    } catch (error) {
      next(error);
    }
  },
  deleteMovement: async (req, res, next) => {
    try {
      const { movementId } = req.params;
      if (!movementId)
        throw createHttpError.BadRequest("Movement ID not found");
      const deletedMovement = await movementModel.deleteMovementById(movementId);
      res.status(200).json({ deletedMovement });
      s;
    } catch (error) {
      next(error);
    }
  },
  updateMovement: async (req, res, next) => {
    try {
      const { movement: formMovement, movementId } = req.body;
      const movement = await movementSchemaValidation().validateAsync(
        omit(formMovement, ["createdAt", "updatedAt"])
      );
      const updatedMovement = await movementModel.updateMovementById(
        movement,
        movementId
      );
      if (!updatedMovement)
        throw createHttpError.NotFound("Movement Not Found");
      res.status(200).json({ updatedMovement });
    } catch (error) {
      next(error);
    }
  },
};
