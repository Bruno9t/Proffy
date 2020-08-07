import express = require('express')

import ClassesController from '../controllers/ClassesController'

const router = express.Router()


router.post('/classes',ClassesController.create)
router.get('/classes',ClassesController.index)

export default router