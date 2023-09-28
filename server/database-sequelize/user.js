module.exports = (connection, DataTypes) => {
  const User = connection.define("users", {
    username: {
       type: DataTypes.STRING,
       allowNull: false
     },
     email: {
       type: DataTypes.STRING,
       allowNull: false,
       unique:true
     },
     password: {
       type: DataTypes.STRING,
     }
  });
  return User
}

