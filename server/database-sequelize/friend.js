module.exports=(connection,DataTypes) => {
    const Friend = connection.define("friend", {
       username: {
          type: DataTypes.STRING,
          allowNull: false
        }
        
     });
     return Friend
    }