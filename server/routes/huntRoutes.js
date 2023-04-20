import express from 'express'
const router = express.Router()

import { createReport, showReports, showAllReports } from '../controllers/huntController.js'

router.post('/create', createReport )
router.get('/', showReports)
router.get('/all', showAllReports)


export default router