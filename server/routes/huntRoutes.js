import express from 'express'
const router = express.Router()

import { createReport, showReports, showAllReports, deleteReport } from '../controllers/huntController.js'
import { verify } from '../middlewares/verify.js'

router.post('/create', verify , createReport )
router.get('/', showReports)
router.get('/all', showAllReports)
router.post('/delete', verify, deleteReport)


export default router