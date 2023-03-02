const mongoose = require('mongoose')
const Role = require('../Models/roleUserModel')
const roles = ['Admin', 'Client']

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoose connected : ${conn.connection.host}`)
        const count = await Role.countDocuments({})
        if (count === 0) {
            for (let i = 0; i < roles.length; i++) {
                const role = new Role({ role: roles[i] })
                await role.save()
            }
        }
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb;