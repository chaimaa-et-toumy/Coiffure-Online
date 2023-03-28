const express = require('express');
const router = express.Router();
const { AddCategorie, GetAllCategorie, UpdateCategorie, DeleteCategorie, GetByIdCategorie, CountCategorie } = require('../Controllers/admin/categorieController');

router.post('/add', AddCategorie);
router.get('/getAll', GetAllCategorie);
router.put('/update/:id', UpdateCategorie);
router.delete('/delete/:id', DeleteCategorie);
router.get('/getById/:id', GetByIdCategorie);
router.get('/count', CountCategorie);

module.exports = router;