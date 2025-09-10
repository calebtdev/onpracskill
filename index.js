require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const Port = process.env.PORT || 3100
const MONGO = process.env.MONGO_URI
const taskRouter = require('./routes/itemRouter')

app.use(express.json())

app.use('/api/v1/', taskRouter)

const startServer = async () => {
    try {
        await mongoose.connect(MONGO)
        console.log('mongodb connected successfully')
        app.listen(Port, () => {
            console.log("app started successfully")
        })
    } catch (error) {
        console.error(error.message);

    }
}

startServer()


