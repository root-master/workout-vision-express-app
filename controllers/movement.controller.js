const { movementSchemaValidation } = require("../helpers/schemaValidations");
const WorkOut = require("../models/workOut.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.movementController = {
  getMovements: async (req, res, next) => {
    try {
      const allMovements = await WorkOut.findAllMovements();
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
      const newMovement = await WorkOut.postMovement(movementInfo);
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
      const movement = await WorkOut.findMovementById(movementId);
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
      const deletedMovement = await WorkOut.deleteMovementById(movementId);
      res.status(200).json({ deletedMovement });
      s;
    } catch (error) {
      next(error);
    }
  },
  updateMovement: async (req, res, next) => {
    try {
      console.log(req.body);
      const { movement: formMovement, movementId } = req.body;
      const movement = await movementSchemaValidation().validateAsync(
        omit(formMovement, ["createdAt", "updatedAt"])
      );
      const updatedMovement = await WorkOut.updateMovementById(
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
