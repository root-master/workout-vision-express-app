const express = require("express")
const mongoose = require("mongoose")
const sessions = require("./routes/api/sessions")

const app = express();

app.use(express.json())

const db = require("./config/keys").mongoURI

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected -> OK"))
    .catch(err => console.log(err));

// var connection = mongoose.connection;

// connection.once("open", function () {
//     connection.db.collection("workout_sessions", function(err, collection){
//         collection.find({}).toArray(function(err, data){
//             console.log(data); // it will print your collection data
//         })
//     });
// });

    
app.use("/api/session", sessions)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port} -> OK`));
