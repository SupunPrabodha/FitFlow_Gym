
//82xciyLyNUlyDtXm
const express = require ("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
app.use(express.json());

//middleware
app.use("/users",router);



mongoose.connect("mongodb+srv://admin:82xciyLyNUlyDtXm@cluster0.tz5r1.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => app.listen(5000))
    .catch((err) => console.log("MongoDB connection error:", err));
