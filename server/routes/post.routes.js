const router = require('express').Router();
const { getAll, createPost, getOne, updateOne, deleteOne,addLikes,decrementLikes } = require ("../controllers/post.controller")

router.get("/getAll",getAll);
router.post("/createPost",createPost);
router.get("/:text",getOne);
router.put("/:id",updateOne);
router.delete("/:id",deleteOne)
// router.put("/:id",addLikes);
// router.put("/:id",decrementLikes);

module.exports = router;
