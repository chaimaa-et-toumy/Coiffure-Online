const moongose = require('mongoose')

const categorieSchema = moongose.Schema({
    genre: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = moongose.model('categorie', categorieSchema)