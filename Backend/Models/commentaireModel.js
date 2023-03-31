const mongoose = require("mongoose")

const CommentaireSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Commentair: {
        type: String,
        required: true,
    },
    Review: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('commentaire', CommentaireSchema)