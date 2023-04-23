import express from 'express'
const router = express.Router()

import { getAll } from '../controllers/leaderboardController.js'

router.get('/:id', getAll)


export default router