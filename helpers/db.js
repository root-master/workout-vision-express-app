const { connect, connection } = require("mongoose");
const db = require("../config/keys").mongoURI;

async function dbConnect() {
  await connect(db, {
    dbName: "workout_db",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  connection.on("connected", () => {
    console.info("MongoDB connected -> OK");
  });
  connection.on("error", (error) => {
    console.error({
      errorMessage: error.message,
    });
  });

  connection.on("close", async () => {
    await connection.close();
  });
}

module.exports = dbConnect;
