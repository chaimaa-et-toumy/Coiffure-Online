const bycrpt = require('bcryptjs')
const crypto = require('crypto')
const User = require('../Models/UserModel')

const createAdminAuto = async () => {
    const Admin = {
        username: process.env.MONGO_USERNAME,
        email: process.env.MONGO_EMAIL,
        password: await bycrpt.hash(process.env.MONGO_PASSWORD, await bycrpt.genSalt(10)),
        eToken: crypto.randomBytes(64).toString('hex'),
        role: '6400bea1c7c7c873fbcb8dcb',
    }
    const Admincount = await User.countDocuments({ role: '6400bea1c7c7c873fbcb8dcb' })
    if (Admincount === 0) {
        const admin = new User(Admin)
        await admin.save()
    }
}

module.exports = createAdminAuto;