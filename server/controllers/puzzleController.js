import PuzzleReport from '../models/PuzzleReport.js'

export const createReport = async (req, res) => {
    const user = req.user
    try {
        const newHunt = new PuzzleReport({
            name: req.body.name,
            user: user.email,
            speed: req.body.speed,
            accuracy: req.body.accuracy,
            intellectual: req.body.intellectual,
        })

        const hunt = await newHunt.save()
        res.status(200).json(hunt)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const showReports = async (req, res) => {
    const user = req.user

    try {
        const reports = await PuzzleReport.find({user: user.email})
        res.status(200).json(reports)
    } catch(err) {
        res.json({error: err})
    }
}

export const showAllReports = async (req, res) => {
    try {
        const reports = await PuzzleReport.find({})
        res.status(200).json(reports)
    } catch(err) {
        res.json({error: err})
    }
}