const Todolist = require("../DB/schema");
const Createtodo = async (req, res, next) => {
  const data = new Todolist(req.body);
  try {
    const createdata = await data.save();
    res.send(createdata);
  } catch (err) {
    res.send(err);
  }
};

module.exports = Createtodo;
