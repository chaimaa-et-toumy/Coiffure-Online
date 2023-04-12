const express = require('express');
const router = express.Router();

const { AddRendezVous, getAllRendezVous, DeleteRendezVous, CountRendezVous, getRendezVousById, UpdateRendezVous } = require('../Controllers/admin/rendezVousController')
const {addRendezVousClient} = require('../Controllers/admin/ClientRendezVous')


router.post('/add', AddRendezVous)
router.get('/getAll', getAllRendezVous)
router.delete('/delete/:id', DeleteRendezVous)
router.get('/count', CountRendezVous)
router.get('/getById/:id', getRendezVousById)
router.put('/update/:id', UpdateRendezVous)
router.post('/addClientRendez', addRendezVousClient)



module.exports = router;
