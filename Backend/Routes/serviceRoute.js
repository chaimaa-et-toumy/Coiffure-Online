const express = require('express');
const router = express.Router();

const { AddService, getAllService, getServiceById, DeleteService, CountService, UpdateService } = require('../Controllers/admin/serviceController');

router.post('/add', AddService);
router.get('/getAll', getAllService);
router.get('/getById/:id', getServiceById);
router.delete('/delete/:id', DeleteService);
router.get('/count', CountService);
router.put('/update/:id', UpdateService);

module.exports = router;