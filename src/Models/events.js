const {Schema,model}=require("mongoose");


const eventSchema=new Schema({
    name:{type: String, require:true},
    date:{type: Date},
    price:{type: Number, require:true},
    place:{type: String, require:true},
    imgDir:{type: String},
});

module.exports=model("Event",eventSchema);