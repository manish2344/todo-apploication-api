const Todolist = require("../DB/schema");
const Deletetodo = async (req, res, next) => {
  
  try {
    const _id = req.params.id;
    const deteledata = await Todolist.findByIdAndDelete(_id);
    res.send(deteledata);
  } catch (err) {
    res.send(err);
  }
};

module.exports = Deletetodo;