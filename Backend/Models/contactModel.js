const moongose = require('mongoose')

const contactSchema = moongose.Schema({
    Name: {
        type: String,
    },
    feedback: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = moongose.model('contact', contactSchema)