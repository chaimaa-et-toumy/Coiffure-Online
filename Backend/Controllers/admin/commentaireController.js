const Commentaire = require('../../Models/commentaireModel')


// method  : post
// url     : api/commentair/add
// acces   : private
const addCommentaire = async (req, res) => {
    const { Name, Commentair, Review, service } = req.body
    if (!Name || !Commentair || !Review || !service) {
        res.status(400)
        throw new Error('please add all fields')
    } else {
        try {
            const commantair = await Commentaire.create({
                Name,
                Commentair,
                Review,
                service,
                date: new Date()
            });

            res.status(200).send("commantaire created successfully")

        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
    }
}


//method : get
//url : api/commentair/getAll
//acces : Private
const getAllcommentair = async (req, res) => {
    try {

        const commantair = await Commentaire.find().populate('service')
        return res.status(200).send(commantair)

    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//methode : delete
//url : api/commentair/delete/:id
//acces : Private
const DeleteCommentair = async (req, res) => {
    const { id } = req.params
    await Commentaire.findByIdAndRemove({ _id: id })
    return res.status(200).send("commentair deleted successfully")
}

//methode : get
//url : api/commentair/count
//acces : Private
const countComment = async (req, res) => {
    try {
        const commentaire = await Commentaire.countDocuments()
        return res.status(200).send(commentaire.toString())
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}



module.exports = {
    addCommentaire,
    getAllcommentair,
    DeleteCommentair,
    countComment
}