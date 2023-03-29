const express = require('express')
const router = express.Router()

const { AddClient, getAllClients, countClients, DeleteClient } = require('../Controllers/admin/clientController')

router.post('/add', AddClient)
router.get('/getAll', getAllClients)
router.get('/count', countClients)
router.delete('/delete/:id', DeleteClient)

module.exports = router