const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
  // Definimos las columnas aquí
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }

});

module.exports = User;

/**
 * 1 ir al notion y copiar la estructura basica de un modelo
 * 2 Cambian los nombres mencionados en los comentarios del modelo base
 * 3 Creamos las columnas que necesitamos
 * 4 allowNull = false , significa que SI O SI debe estar el valor para que se cree el resgistro
 * 5  unique: true, significa que el valor de la columan sera unico
 */