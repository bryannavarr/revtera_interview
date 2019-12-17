const router = require('express').Router()
const linksController = require('../controllers/links.controller')

module.exports = router

router.get('/', linksController.readAll)
router.get('/', linksController.readAsIs)
router.post('/', linksController.create)
