const mysql = require('mysql2');
const Sequelize = require('sequelize');

 // to get pool of connections as we have a multiple connections and multiple queries.
const pool = mysql.createPool({    
    host : 'localhost' ,
    user : 'root' ,
    database : 'expense-app',
    password : 'Shashi@2000'
}) 
const sequelize = new Sequelize('expense-app','root','Shashi@2000',{
    dialect: 'mysql',
    host : 'localhost'
});

module.exports = pool.promise();
module.exports = sequelize;