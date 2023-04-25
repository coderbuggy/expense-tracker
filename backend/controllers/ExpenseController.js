import ExpenseSchema from '../models/ExpenseModel.js'

const addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body
    
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        /* Validations */
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: "All fields are required."})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: "Amount must be a positive."})
        }
        await expense.save()
        res.status(200).json({message: "Expense added.."})
    } catch (error) {
        res.status(500).json({message: "Server error!"})
    }
}

const getExpenses = async (req,res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: "Server error!"})
    }
} 

const deleteExpense = async (req,res) => {
    const {id} = req.params
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense) =>{
        res.status(200).json({message: "Expense deleted.."})
    })
    .catch((error) => {
        res.status(500).json({message: "Delete error!"})
    })
} 

export {addExpense, getExpenses, deleteExpense}