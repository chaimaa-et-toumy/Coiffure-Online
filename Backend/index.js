require('dotenv').config()
const express = require('express')
const router = require('./Routes/authRoute')
const connectDb = require('./Config/DbConfig')
const cors = require('cors')
connectDb()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/auth', router)

const port = process.env.PORT || 8080

app.listen(port, (err) => {
    if (!err) {
        console.log(`the port ${port} is running`)
    }
    else {
        console.log(err)
    }
})

module.exports = app