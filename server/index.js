const express = require("express");
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment.routes')
const friendRoutes = require('./routes/friend.routes')


const db = require('./database-sequelize');

const app = express();
const PORT =  3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/user", userRoutes);
app.use("/api/post",postRoutes);
app.use("/api/comment",commentRoutes)
app.use("/api/friend",friendRoutes)

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
