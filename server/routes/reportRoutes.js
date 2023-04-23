import express from 'express'
const router = express.Router()

import { createReport, showAllReports, deleteReport, showReportsByCategory } from '../controllers/reportController.js'
import { verify } from '../middlewares/verify.js'

router.post('/create', verify , createReport )
router.get('/all', showAllReports)
router.get('/category/:id', showReportsByCategory)
router.post('/delete', deleteReport)


export default router