const mongoose = require('mongoose');
const ServiceModel = mongoose.models['service'] || mongoose.model('service', serviceSchema);
const RendezVous = require('../../Models/rendezVousModel')
const ClientModel = require('../../Models/UserModel')

//method : post
//url : api/rendezvous/add
//acces : public
const AddRendezVous = async (req, res) => {
    const { Date, Heure, service, client, phone } = req.body;

    if (!Date || !Heure || !service || !client) {
        return res.status(400).send("all fields are required")
    }

    try {
        const RendezVousExist = await RendezVous.findOne({ Date, Heure })
        if (!RendezVousExist) {
            await RendezVous.create({ Date, Heure, Etat: "en attente", service, client, phone })
            return res.status(200).send("rendez vous added successfully")
        } else {
            return res.status(400).send("rendez vous already exist")
        }

    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : put
//url : api/rendezvous/update/:id
//acces : Private
const UpdateRendezVous = async (req, res) => {
    const { id } = req.params
    const { Date, Heure, Etat, service, client } = req.body

    if (!Date || !Heure || !Etat || !service || !client) {
        return res.status(400).send("all fields are required")
    }

    try {
        if (service) {
            const service_ = await ServiceModel.findOne({ _id: service })
            if (!service_) return res.status(400).send("service not found")
        }

        if (client) {
            const client_ = await ClientModel.findOne({ _id: client })
            if (!client_) return res.status(400).send("client not found")
        }
        const RendezVousExist = await RendezVous.findOne({ Date, Heure })
        if (RendezVousExist && RendezVousExist._id != id) {
            return res.status(400).send("rendez vous already exist")
        }
        else {
            await RendezVous.updateOne({ _id: id }, { Date, Heure, Etat, service, client })
            return res.status(200).send("rendez vous updated successfully")
        }

    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//methode : get
//url : api/rendezvous/getAll
//acces : Private
const getAllRendezVous = async (req, res) => {
    try {
        const rendezVous = await RendezVous.find().populate('service').populate('client')
        return res.status(200).send(rendezVous)
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : get
//url : api/rendezvous/getById/:id
//acces : Private
const getRendezVousById = async (req, res) => {
    const { id } = req.params
    try {
        const rendezVous = await RendezVous.findOne({ _id: id }).populate('service').populate('client')
        return res.status(200).send(rendezVous)
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : delete
//url : api/rendezvous/delete/:id
//acces : Private
const DeleteRendezVous = async (req, res) => {
    const { id } = req.params
    await RendezVous.findByIdAndRemove({ _id: id })
    return res.status(200).send("Rendez vous deleted successfully")
}

//method : get
//url : api/rendezvous/count
//acces : Private
const CountRendezVous = async (req, res) => {
    try {
        const rendezVous = await RendezVous.countDocuments()
        return res.status(200).send(rendezVous.toString())
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}


module.exports = {
    AddRendezVous,
    getAllRendezVous,
    DeleteRendezVous,
    CountRendezVous,
    getRendezVousById,
    UpdateRendezVous
}


