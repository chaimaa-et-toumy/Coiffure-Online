const mongoose = require('mongoose')
const createAdminAuto = require('../Utils/createAdminAuto')
const createAutoRole = require('../Utils/creatAutoRole')



const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoose connected : ${conn.connection.host}`)
        createAdminAuto()
        createAutoRole()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb;