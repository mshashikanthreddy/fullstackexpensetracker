const express = require('express');

const expensesController = require('../controllers/expenses.js');

const router = express.Router();

router.get('/get/expenses',expensesController.getExpenses);

router.post('/post/expenses',expensesController.postExpenses);

router.get('/edit/expenses/:id',expensesController.editExpenses);

router.delete('/delete/expenses/:id',expensesController.deleteExpenses);

module.exports = router;