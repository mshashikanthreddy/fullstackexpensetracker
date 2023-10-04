const Sequelize = require('sequelize');

const sequelize = require('../util/database');  // database pool of connections

// create we create a model in which 'product' is name. we use the js objects in sequelize
const Expenses = sequelize.define('expenses' , {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,
  },

  amount : {
   type :  Sequelize.BIGINT,
   allowNull : false 
  },

  expDesc: {
    type : Sequelize.STRING,
    allowNull: false
  },

  expCate : {
    type: Sequelize.STRING,
    allowNull: false
  }

});  

module.exports = Expenses;