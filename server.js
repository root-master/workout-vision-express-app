const express = require("express")
const mongoose = require("mongoose")
const sessions = require("./routes/api/sessions")

const app = express();

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const db = require("./config/keys").mongoURI

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected -> OK"))
    .catch(err => console.log(err));
    
app.use("/api/session", sessions)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port} -> OK`));
