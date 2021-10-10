const MovementDB = require("../schema/Movement.schema");

module.exports = class WorkOut {
  static async findAllMovements() {
    return await MovementDB.find({});
  }

  static async postMovement(newMovement) {
    return await MovementDB.create(newMovement);
  }

  static async findMovementById(movementId) {
    return await MovementDB.findById(movementId).populate();
  }

  static async deleteMovementById(movementId) {
    return await MovementDB.findByIdAndDelete(movementId);
  }

  static async updateMovementById(movement, movementId) {
    return await MovementDB.findOneAndUpdate(movementId, movement);
  }
};
