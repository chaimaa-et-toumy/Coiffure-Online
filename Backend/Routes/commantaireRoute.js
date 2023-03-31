const express = require('express')
const router = express.Router()

const { addCommentaire, getAllcommentair, DeleteCommentair, countComment } = require('../Controllers/admin/commentaireController')

router.post('/add', addCommentaire)
router.get('/getAll', getAllcommentair)
router.delete('/delete/:id', DeleteCommentair)
router.get('/count', countComment)

module.exports = router