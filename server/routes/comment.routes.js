const router = require('express').Router();
const { createComment, deleteOne, getAll } = require ("../controllers/comments.controller")

router.get("/getAll",getAll)
router.post("/createComment",createComment);
router.delete("/:id",deleteOne)

module.exports = router;