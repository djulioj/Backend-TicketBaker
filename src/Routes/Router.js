const { Router } = require("express");
const router = Router();
const Event = require("../Models/events");

router.get("/", async(req, res) => {

    const event= await Event.find();
    res.json(event);

});

router.get("/:id",async(req,res)=>{
    const event=await Event.findById(req.params.id);
    res.json(event);
});

router.post("/", async (req, res) => {
  const { name, price, place, date, imgDir } = req.body;
  const event=new Event({name,date,price,place,imgDir});
  await event.save();
  res.json("recived");
});

router.put("/:id",async(req,res)=>{
    const { name, price, place, date, imgDir } = req.body;
    const newEvent=new Event({name,date,price,place,imgDir});
    await Event.findByIdAndUpdate(req.params.id,newEvent);
    res.json("update");
});

router.delete("/:id",async(req,res)=>{
    await Event.findByIdAndDelete(req.params.id);
    res.json("deleted");
});

module.exports = router;
