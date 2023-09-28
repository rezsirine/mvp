const router = require('express').Router();
const { SendFriend, deleteOne } = require ("../controllers/friend.controller")

router.post("/SendFriend",SendFriend);
router.delete("/:id",deleteOne)

module.exports = router;