const {Friend} = require("../database-sequelize/index")

module.exports.SendFriend = async (req,res) => {
  try {
    const newFriend = await Friend.create(id);
    res.json(newFriend)
  } catch (error) {
    throw error
  }
};
  
  module.exports.deleteOne = async (req,res) => {
    try {
      const deleted = await Friend.destroy({where:{id:req.params.id}});
      res.json(deleted);
    } catch (error) {
        res.status(500).send(error)
    }
  };