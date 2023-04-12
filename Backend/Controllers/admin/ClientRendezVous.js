const Client = require('../../Models/UserModel')
const RendezVous = require('../../Models/rendezVousModel')



const addRendezVousClient = async (req, res) => {

    const { Date, Heure, service, phoneNumber, email, fullName } = req.body

    const ClientInfo = {
        email,
        phoneNumber,
        fullName
    }

    const User = await Client.create(ClientInfo)

    const RendezVousInfo = {
        Date,
        Heure,
        service,
        client: User._id,
        Etat: 'En attente'
    }

    const RendezVousClient = await RendezVous.create(RendezVousInfo)

    res.status(200).send("rendez vous added successfully")


}

module.exports = {
    addRendezVousClient
}
