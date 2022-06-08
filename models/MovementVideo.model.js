const MovementVideo = require("../schema/MovementVideo.schema");

module.exports = class movementModel {
    static async findAllMovements() {
        return await MovementVideo.find({});
    }

    static async findAllPublicMovementVideos() {
        return await MovementVideo.find({ private: false });
    }

    static async findAllUserMovementVideos({ userId }) {
        return await MovementVideo.find({ "user.sub": userId });
    }

    static async postMovementVideo(newMovementVideo) {
        return await MovementVideo.create(newMovementVideo);
    }

    static async findMovementVideoById(movementVideoId) {
        return await MovementVideo.findById(movementVideoId, { _id: 0, __v: 0 });
    }

    static async deleteMovementVideoById(movementVideoId) {
        return await MovementVideo.findByIdAndDelete(movementVideoId);
    }

    static async updateMovementVideoById(newMovementVideo, movementVideoId) {
        return await MovementVideo.findByIdAndUpdate(movementVideoId, newMovementVideo, {
            strict: true,
            returnOriginal: false,
        });
    }
};
