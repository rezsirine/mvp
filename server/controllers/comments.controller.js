const {Comment} = require("../database-sequelize/index")

module.exports.getAll= async (req,res) => {
  try {
    const newComment = await Comment.findAll({});
    res.status(201).send(newComment);
  } catch (error) {
    res.status(500).send(error)
  }
};

module.exports.createComment = async (req,res) => {
    try {
      const newComment = await Comment.create(req.body);
      res.status(201).send(newComment);
    } catch (error) {
      res.status(500).send(error)
    }
  };
  
  module.exports.deleteOne = async (req,res) => {
    try {
      const deleted = await Comment.destroy({where:{id:req.params.id}});
      res.json(deleted);
    } catch (error) {
        res.status(500).send(error)
    }
  };