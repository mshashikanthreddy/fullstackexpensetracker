const Expenses = require('../models/grocery');


exports.getExpenses = async (req,res,next) => {
    try{
    await Expenses.findAll()
    .then((data) => {
        res.status(200).json(data);
    })
}
    catch(err)  {
        console.log(JSON.stringify(err));
    }
}

exports.postExpenses = async (req,res,next) => {

    const amount = req.body.amount;
    const expDesc = req.body.expDesc;
    const expCate = req.body.expCate;

    try {
        await Expenses.create({
            amount : amount ,
            expDesc : expDesc ,
            expCate : expCate
        })
        .then((data) => {
            res.status(200).json(data);
        })
    }
    catch(err) {
        console.log((err));
    }
}

exports.deleteExpenses = async (req,res,next) => {

    try {
        const Id = req.params.id;
        await Expenses.findByPk(Id)
        .then((user) => {
            return user.destroy();
        })
        .then((response) => {
            res.status(200);
        })
    }
    catch(err) {
        console.log(err);
    }
}

exports.editExpenses = async (req,res,next) => {
    const Id = req.params.id;
    try{
    await Expenses.findByPk(Id)
        .then((data) => {
            res.json(data);
        })
    }
    catch(err) {
        console.log(err);
    }

}