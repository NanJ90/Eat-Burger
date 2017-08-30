module.exports =  function (sequelize, DataTypes){
	
	var Eater = sequelize.define("Eater", {
		eater_name: DataTypes.STRING,
	});
		Eater.associate = function(models) {
			// one to many with burger  
			Eater.hasMany(models.Burger,  {
			  foreignKey: {
			  	name:"ownerID",
			  	allowNull:false
			  	}
			  
			});
		};
	return Eater;
};
