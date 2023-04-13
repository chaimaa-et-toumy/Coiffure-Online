require('dotenv').config()
const express = require('express')
const router = require('./Routes/authRoute')
const categorieRoute = require('./Routes/categorieRoute')
const serviceRoute = require('./Routes/serviceRoute')
const clientRoute = require('./Routes/clientRoute')
const commentairRoute = require('./Routes/commantaireRoute')
const rendezvousRoute = require('./Routes/rendezvousRoute')
const connectDb = require('./Config/DbConfig')
const cors = require('cors')
connectDb()

const app = express()
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/auth', router)
app.use('/api/categorie', categorieRoute)
app.use('/api/service', serviceRoute)
app.use('/api/client', clientRoute)
app.use('/api/commentaire', commentairRoute)
app.use('/api/rendezvous', rendezvousRoute)

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