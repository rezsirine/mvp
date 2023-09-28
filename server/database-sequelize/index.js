const {Sequelize, DataTypes} = require("sequelize");

const connection = new Sequelize(
   'store',
   'root',
   'root',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 const User = require("./user")(connection,DataTypes)
 const Friend = require("./friend")(connection,DataTypes)
 const Post = require("./posts")(connection,DataTypes)
 const Comment = require('./Comments')(connection,DataTypes)

 User.hasMany(Post)
 Post.belongsTo(User)
 User.hasMany(Friend)
 Friend.belongsTo(User)
 Post.hasMany(Comment)
 Comment.belongsTo(Post)
 
 connection.sync({alter:false}).then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});
module.exports = {User,Post,Comment,Friend}