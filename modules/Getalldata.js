const Todolist = require("../DB/schema");
const Getalldata = async (req, res, next) => {
  
  try {
    const createdata = await Todolist.find();
    res.send(createdata);
  } catch (err) {
    res.send(err);
  }
};

module.exports = Getalldata;