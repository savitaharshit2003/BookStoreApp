import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/authRoute.js'
import bookRoute from './routes/bookRoute.js'
import {connectDB} from './lib/db.js'
import job from './lib/cron.js'
dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000  
job.start();
app.use(express.json());
app.use(cors());

app.use('/api/auth',authRoute)
app.use('/api/book',bookRoute)

console.log({PORT})

app.get('/', (req, res) => {
  res.send('Hello Harshit!')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  connectDB();
})
       