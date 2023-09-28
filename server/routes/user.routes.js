const router = require('express').Router();
const {signUp,signIn} = require ("../controllers/user.controller")

router.post("/signUp",signUp);
router.get("/:email",signIn);

module.exports = router;
