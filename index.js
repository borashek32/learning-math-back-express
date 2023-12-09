const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')
const appRoter = require('./routes/appRouter')
const PORT = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.use('/auth', authRouter)
app.use('/users', appRoter)

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://baranova_natalia:rfoy9I3WrVjhyRu0@cluster0.b6cxdof.mongodb.net/learning-math?retryWrites=true&w=majority')
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()