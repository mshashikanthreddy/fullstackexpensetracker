const express = require('express');

const app = express();

var cors = require('cors');

app.use(cors());

const sequelize = require('./util/database');

const bodyParser = require('body-parser');

const expensesRouter = require('./routes/expenses');


app.use(bodyParser.json({extended : false}));


app.use(expensesRouter);

sequelize.sync()
.then(result => {
    //console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});