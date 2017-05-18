const express = require('express')
const router = express.Router()
var userController = require('../controllers/userController')
var articleController = require('../controllers/articleController')

router.get('/api/users', userController.getAll)
router.get('/api/user/:id', userController.getById)
router.post('/api/users', userController.insertOne)
router.put('/api/user/:id', userController.updateById)
router.delete('/api/user/:id', userController.deleteById)

router.get('/api/articles', articleController.getAll)
router.get('/api/article/:id', articleController.getById)
router.post('/api/articles', articleController.insertOne)
router.put('/api/article/:id', articleController.updateById)
router.delete('/api/article/:id', articleController.deleteById)

module.exports = router