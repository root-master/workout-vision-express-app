const { connect, connection } = require("mongoose");
const db = process.env.MONGODB_URL;

async function dbConnect() {
  await connect(db, {
    dbName: "workout_db",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
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
