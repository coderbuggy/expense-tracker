import express from 'express';
import {addIncome, deleteIncome, getIncomes} from '../controllers/IncomeController.js'
const router = express.Router();


router.post('/add-income', addIncome)
      .get('/get-incomes', getIncomes)
      .delete('/delete-income/:id', deleteIncome)
  

export default router