const Todolist = require("../DB/schema");
const Updatetodo = async (req, res, next) => {
  
  try {
    const _id = req.params.id;
    const updatedata = await Todolist.findByIdAndUpdate(_id ,req.body,{
    new:true
    });
    res.send(updatedata);
  } catch (err) {
    res.send(err);
  }
};

module.exports = Updatetodo;