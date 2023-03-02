const moongose = require('mongoose')

const userRoleSchema = moongose.Schema({
    role: {
        type: String,
        default: 'Client'
    }
}, {
    timestamps: true
})

module.exports = moongose.model('Role', userRoleSchema)