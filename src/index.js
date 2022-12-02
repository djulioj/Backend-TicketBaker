const express=require("express");
const path= require("path");
const cors=require("cors");
const multer=require("multer");

const app=express();

//Settings
app.set("port",process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(cors());
const storage=multer.diskStorage({
  destination: path.join(__dirname,"Public/uploads"),
  filename(req,file,cb){
    cb(null,new Date().getTime()+path.extname(file.originalname));
  }
});
app.use(multer(storage).single("image"));
app.use(express.urlencoded({extended:false}));

//Routes
app.use("/api/events",require("./Routes/Router"));

//Static Files
app.use(express.static(path.join(__dirname,"./Public")));

require("./database");

app.listen(app.get("port"),()=>{
  console.log("server on port",app.get("port"));
});