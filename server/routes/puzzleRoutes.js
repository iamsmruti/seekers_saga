import express from 'express'
const router = express.Router()

import { createReport, showReports, showAllReports } from '../controllers/puzzleController.js'
import { verify } from '../middlewares/verify.js'

router.post('/create', verify , createReport )
router.get('/', verify, showReports)
router.get('/all', verify, showAllReports)


export default router