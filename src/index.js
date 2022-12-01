const express=require("express");
const { join } = require("path");

const app=express();

//Settings
app.set("port",process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use("/api/events",require("./Routes/Router"));

//Static Files
app.use(express.static(join(__dirname,"../public")));

require("./database");

app.listen(app.get("port"),()=>{
  console.log("server on port",app.get("port"));
});