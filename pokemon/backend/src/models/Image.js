 const { Sequelize,DataTypes } = require('sequelize');
 
 
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('image', {
    imgT : {
    	type : DataTypes.STRING
    },
    imgA : {
      type : DataTypes.STRING
    },
    imgC : {
      type : DataTypes.STRING
    }
  }
)};
