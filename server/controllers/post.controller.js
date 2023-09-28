const {Post} = require("../database-sequelize/index")

module.exports.getAll= async (req,res) => {
  try {
    const newPost = await Post.findAll({});
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send(error)
  }
};
module.exports.createPost = async (req,res) => {
    try {
      const newPost = await Post.create(req.body);
      res.json(newPost)
    } catch (error) {
      throw error
    }
  };
  module.exports.getOne = async (req,res) => {
    try {
      const onePost = await Post.findOne({ where: { text:req.params.text  } });
      res.status(200).send(onePost);
    } catch (error) {
      res.status(500).send(error)
    }
  };
  module.exports.updateOne = async (req,res) => {
    try {
      const updated = await Post.update(req.body,{where:{id:req.params.id}});
      res.status(202).send(updated);
    } catch (error) {
        res.json(error)
    }
  };
  module.exports.deleteOne = async (req,res) => {
    try {
      const deleted = await Post.destroy({where:{id:req.params.id}});
      res.json(deleted);
    } catch (error) {
        res.status(500).send(error)
    }
  };
  // module.exports.addLikes = async (req,res) => {
  //   try {
  //     const onePost = await Post.findOne({ where: { id:req.params.id  } });
  //     const updated = await Post.update({likes:onePost.likes+1},{where:{id:onePost.id}});
  //     res.status(202).send(updated);
  //   } catch (error) {
  //       res.status(500).send(error)
  //   }
  // };
  // module.exports.decrementLikes = async (req,res) => {
  //   try {
  //     const onePost = await Post.findOne({ where: { id:req.params.id  } });
  //     const updated = await Post.update({likes:onePost.likes-1},{where:{id:onePost.id}});
  //     res.status(202).send(updated);
  //   } catch (error) {
  //       res.status(500).send(error)
  //   }
  // };