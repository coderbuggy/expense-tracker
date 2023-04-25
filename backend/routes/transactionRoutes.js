import express from 'express';
import {addIncome, deleteIncome, getIncomes} from '../controllers/IncomeController.js'
import {addExpense, deleteExpense, getExpenses} from '../controllers/ExpenseController.js'
const router = express.Router();

/* Income Routes */
router.post('/add-income', addIncome)
      .get('/get-incomes', getIncomes)
      .delete('/delete-income/:id', deleteIncome)

/* Expense Routes */
router.post('/add-expense', addExpense)
      .get('/get-expenses', getExpenses)
      .delete('/delete-expense/:id', deleteExpense)

export default router