const moongose = require('mongoose')

const categorieSchema = moongose.Schema({
    genre: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = moongose.model('categorie', categorieSchema)