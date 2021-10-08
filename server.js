const express = require("express");
const mongoose = require("mongoose");
const movementRoutes = require("./routes/movement.routes");

const app = express();

app.use(express.json());

app.use(movementRoutes);

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected -> OK"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port} -> OK`));
