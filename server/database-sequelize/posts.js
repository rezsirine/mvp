module.exports=(connection,DataTypes) => {
    const Post = connection.define("post", {
       text: {
          type: DataTypes.STRING,
          allowNull: false
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false
        },
        likes: {
          type: DataTypes.INTEGER,
        }
     });
     return Post
}