const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://djulioj:sa123456789@ticket-baker.2o6onbj.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })
  .then(db=> console.log("db is connected"))
  .catch(err=> console.error(err));