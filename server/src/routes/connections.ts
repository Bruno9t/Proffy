import express = require('express')

import ConnectionsController from '../controllers/ConnectionsController'

const router = express.Router()

router.get('/connections',ConnectionsController.index)
router.post('/connections',ConnectionsController.create)

export default router