const Categorie = require('../../Models/categorieModel')

//method : post
//url : api/categorie/add
//acces : Private
const AddCategorie = async (req, res) => {

    const { genre } = req.body

    if (!genre) {
        return res.status(400).send("genre is required")
    }

    if (genre !== 'homme' && genre !== 'femme' && genre !== 'tout') {
        return res.status(400).send("genre must be homme, femme or tout")
    }

    try {
        const genreExist = await Categorie.findOne({ genre })
        if (!genreExist) {
            const categorie = await Categorie.create({ genre })
            return res.status(200).send("categorie added successfully")
        }
        return res.status(400).send("genre already exist")

    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }

}

//method : put
//url : api/categorie/update/:id
//acces : Private
const UpdateCategorie = async (req, res) => {
    const { id } = req.params
    const { genre } = req.body

    if (!genre) {
        return res.status(400).send("genre is required")
    }

    if (genre !== 'homme' && genre !== 'femme' && genre !== 'tout') {
        return res.status(400).send("genre must be homme, femme or tout")
    }

    try {
        const genreExist = await Categorie.findOne({ genre })
        if (genreExist && genreExist._id !== id) {
            return res.status(400).send("genre already exist")
        }
        else {
            await Categorie.updateOne({ _id: id }, { genre })
            return res.status(200).send("categorie updated successfully")
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : delete
//url : api/categorie/delete/:id
//acces : Private
const DeleteCategorie = async (req, res) => {
    const { id } = req.params
    await Categorie.findByIdAndRemove({ _id: id })
    return res.status(200).send("categorie deleted successfully")
}

//method : get
//url : api/categorie/getAll
//acces : Private
const GetAllCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.find()
        return res.status(200).send(categorie)
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : get
//url : api/categorie/getById/:id
//acces : Private
const GetByIdCategorie = async (req, res) => {
    const { id } = req.params
    try {
        const categorie = await Categorie.findOne({ _id: id })
        return res.status(200).send(categorie)
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : get
//url : api/categorie/count
//acces : Private
const CountCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.countDocuments()
        return res.status(200).send(categorie.toString())
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}


module.exports = {
    AddCategorie,
    GetAllCategorie,
    UpdateCategorie,
    DeleteCategorie,
    GetByIdCategorie,
    CountCategorie
}
