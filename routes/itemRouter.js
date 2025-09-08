const express = require('express')
const router = express.Router()
const { getAllItems, createItem, deleteItem } = require('../controllers/itemController')

router.get('/get', getAllItems)
router.post('/post', createItem)
router.delete('/delete', deleteItem)

module.exports = router