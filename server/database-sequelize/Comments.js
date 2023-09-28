module.exports=(connection,DataTypes) => {
    const Comment = connection.define("comment", {
       text: {
          type: DataTypes.STRING,
          allowNull: false
        }
        
     });
     return Comment
    }