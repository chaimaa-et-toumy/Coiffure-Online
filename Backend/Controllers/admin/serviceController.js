// const Categorie = require('../../models/categorieModel');
const mongoose = require('mongoose');
const Categorie = mongoose.models['categorie'] || mongoose.model('categorie', categorieSchema);
const Service = require('../../models/serviceModel');

//method : post
//url : api/service/add
//acces : Private
const AddService = async (req, res) => {
    const { Nom, prix, produitUtilise, categorie } = req.body;
    if (!Nom || !prix || !produitUtilise || !categorie) {
        return res.status(400).send("all fields are required")
    }

    try {
        const ServiceExist = await Service.findOne({ Nom })
        if (!ServiceExist) {
            const service = await Service.create({ Nom, prix, produitUtilise, categorie })
            return res.status(200).send("service added successfully")
        }
        return res.status(400).send("service already exist")
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : put
//url : api/service/update/:id
//acces : Private
const UpdateService = async (req, res) => {
    const { id } = req.params
    const { Nom, prix, produitUtilise, categorie } = req.body

    if (!Nom || !prix || !produitUtilise || !categorie) {
        return res.status(400).send("all fields are required")
    }

    try {
        if (categorie) {
            const categorie_ = await Categorie.findOne({ _id: categorie })
            if (!categorie_) return res.status(400).send("categorie not found")
        }
        const ServiceExist = await Service.findOne({ Nom })
        if (ServiceExist && ServiceExist._id != id) {
            return res.status(400).send("service already exist")
        }
        else {
            await Service.updateOne({ _id: id }, { Nom, prix, produitUtilise, categorie })
            return res.status(200).send("service updated successfully")
        }

    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : get
//url : api/service/getAll
//acces : Private
const getAllService = async (req, res) => {
    try {
        const service = await Service.find().populate('categorie')
        return res.status(200).send(service)
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : get
//url : api/service/getById/:id
//acces : Private
const getServiceById = async (req, res) => {
    const { id } = req.params
    try {
        const service = await Service.findOne({ _id: id }).populate('categorie')
        return res.status(200).send(service)
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : delete
//url : api/service/delete/:id
//acces : Private
const DeleteService = async (req, res) => {
    const { id } = req.params
    await Service.findByIdAndRemove({ _id: id })
    return res.status(200).send("service deleted successfully")
}

//method : get
//url : api/service/count
//acces : Private
const CountService = async (req, res) => {
    try {
        const service = await Service.countDocuments()
        return res.status(200).send(service.toString())
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}


module.exports = {
    AddService,
    getAllService,
    getServiceById,
    DeleteService,
    CountService,
    UpdateService
}