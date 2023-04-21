import HuntReport from '../models/HuntReport.js'

export const createReport = async (req, res) => {
    const user = req.user
    
    try {
        const newHunt = new HuntReport.create({
            name: req.body.name,
            user: user.email,
            speed: req.body.speed,
            accuracy: req.body.accuracy,
            intellectual: req.body.intellectual,
        })

        const hunt = await newHunt.save()
        res.status(200).json(hunt)
    } catch (err) {
        res.json({error: err})
    }
}

export const showReports = async (req, res) => {
    const user = req.user

    try {
        const reports = await HuntReport.find({user: user.email})
        res.status(200).json(reports)
    } catch(err) {
        res.json({error: err})
    }
}

export const showAllReports = async (req, res) => {
    try {
        const reports = await HuntReport.find({})
        res.status(200).json(reports)
    } catch(err) {
        res.json({error: err})
    }
}