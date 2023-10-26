const express= require("express"); 

const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser")

const mongoose= require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://srinivas21bce9808:Kiran%40200327@cluster0.e9lyjcw.mongodb.net/schooldb")
var db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred while connecting with DB"));
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/studentRoute',studentRoute)

app.listen(4000,()=>{
    console.log("Server connected at 4000")
})


 
