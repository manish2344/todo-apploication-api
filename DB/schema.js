const mongoose = require("mongoose");
const Alllist = new mongoose.Schema({
  title: {
    type:String,
    required: true,
  },
  description: {
    type: String,
  },
});
const Todolist = new mongoose.model("Todolist", Alllist);
module.exports = Todolist;
