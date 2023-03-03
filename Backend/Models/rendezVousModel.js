const moongose = require('mongoose')

const rendezVousSchema = moongose.Schema({
    Date: {
        type: Date,
    },
    Heure: {
        type: Date,
    },
    disponibilite: {
        type: Boolean,
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