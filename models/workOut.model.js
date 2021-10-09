const MovementDB = require("../schema/Movement.schema");

module.exports = class WorkOut {
  static async findAllMovements() {
    return await MovementDB.find({});
  }

  static async postMovement(newMovement) {
    return await MovementDB.create(newMovement);
  }

  static async findMovementById(movementId) {
    console.log(movementId);
    return await MovementDB.findById(movementId).populate();
  }
};
