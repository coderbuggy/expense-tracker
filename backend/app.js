import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import db from './db/db.js'
import transectionRoutes from './routes/transactionRoutes.js'
// import {readdirSync} from 'fs'


const app = express()
const port = process.env.PORT || 5000



/* Middlewares */
app.use(express.json())
app.use(cors())
dotenv.config()
db()


app.use('/api/v1', transectionRoutes)



// View Engine Setups
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');



app.listen(port, () => {
  console.log(`App listening on port : ${port}`)
})

