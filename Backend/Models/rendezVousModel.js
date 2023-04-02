const moongose = require('mongoose')

const rendezVousSchema = moongose.Schema({
    Date: {
        type: String,
        match: /^\d{4}-\d{2}-\d{2}$/
    },
    Heure: {
        type: String,
    },
    Etat: {
        type: String,
    },
    service: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'service'
    },
    client: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'user'
    },
}, {
    timestamps: true
})

module.exports = moongose.model('rendezVous', rendezVousSchema)