const mongoose = require('mongoose');
const Client = mongoose.models['user'] || mongoose.model('user', userSchema);

//method : post
//url : api/client/add
//acces : Private
const AddClient = async (req, res) => {
    const { email, fullName, phoneNumber } = req.body
    if (!email || !fullName || !phoneNumber) {
        return res.status(400).send("all fields are required")
    }

    try {

        const ClientExist = await Client.findOne({ email })
        if (!ClientExist) {
            await Client.create({ email, fullName, phoneNumber })
            return res.status(200).send("client added successfully")
        } else {
            return res.status(400).send("client already exist")
        }

    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : get
//url : api/client/getAll
//acces : Private
const getAllClients = async (req, res) => {
    try {

        const clients = await Client.find({ role: 'Client' })
        return res.status(200).send(clients)

    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//method : get
//url : api/client/count
//acces : Private
const countClients = async (req, res) => {
    try {
        const clients = await Client.countDocuments()
        return res.status(200).send(clients.toString())
    } catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
}

//methode : delete
//url : api/client/delete/:id
//acces : Private
const DeleteClient = async (req, res) => {
    const { id } = req.params
    await Client.findByIdAndRemove({ _id: id })
    return res.status(200).send("User deleted successfully")
}

module.exports = {
    AddClient,
    getAllClients,
    countClients,
    DeleteClient
}
