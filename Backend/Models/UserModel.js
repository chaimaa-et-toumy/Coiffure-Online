const moongose = require('mongoose')

const userSchema = moongose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: [true, "please enter a email"],
        unique: true
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    },
    eToken: {
        type: String,
    },
    phoneNumber: {
        type: Number
    },
    isVerifed: {
        type: Boolean,
        default: false
    },
    isReset: {
        type: Boolean
    },
    role: {
        type: String,
        ref: 'Role',
        default: 'Client'
    },
}, {
    timestamps: true
})

module.exports = moongose.model('user', userSchema)

