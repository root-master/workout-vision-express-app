const { movementSchemaValidation } = require("../helpers/schemaValidations");
const WorkOut = require("../models/workOut.model");
const Joi = require("joi");
const createHttpError = require("http-errors");

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
      if (error.isJoi) next(createHttpError.BadRequest(error.message));
      next(error);
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
};
