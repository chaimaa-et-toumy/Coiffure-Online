const moongose = require('mongoose')

const serviceSchema = moongose.Schema({
    Nom: {
        type: String,
    },
    prix: {
        type: Number,
    },
    produitUtilise: {
        type: String,
    },
    description: {
        type: String,
    },
    categorie: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'categorie'
    },
}, {
    timestamps: true
})

module.exports = moongose.model('service', serviceSchema)