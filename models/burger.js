module.exports =function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    burger_name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    devoured: {
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  });
  return Burger;
};

