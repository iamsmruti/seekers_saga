import LeaderBoard from '../models/LeaderBoard.js'
import Report from '../models/Report.js'

export const createReport = async (req, res) => {
    const user = req.user

    try {
        // Generate a report for every session
        const newReport = new Report({
            name: req.body.name,
            user: user.email,
            category: req.body.category,
            score: req.body.score,
            stats: req.body.stats,
            totalTime: req.body.totalTime,
            totalAttempts: req.body.totalAttempts
        })

        const report = await newReport.save()
        console.log(report)

        // Checks if the user is on leaderboard
        const recordFound = await LeaderBoard.find({userID: user.email, gameID: req.body.name})
        console.log(recordFound)

        // If user not found in leaderboard
        if(recordFound.length === 0){
            console.log("new")

            const newRecord = new LeaderBoard({
                gameID: req.body.name,
                userID: user.email,
                score: req.body.score,
                totalTime: req.body.totalTime,
                totalAttempts: req.body.totalAttempts
            })

            await newRecord.save()
            return res.status(200).json({report: report, leaderboard: newRecord})
        }
        
        // Checks if user is already on leaderboard
        if (recordFound.length > 0){
            console.log("there already")
            // Checks if the current score is better than the score on leaderboard
            if(recordFound[0].score < req.body.score){
                const updatedRecord = await LeaderBoard.findByIdAndUpdate(recordFound[0]._id, {
                    gameID: req.body.name,
                    userID: user.email,
                    score: req.body.score,
                    totalTime: req.body.totalTime,
                    totalAttempts: req.body.totalAttempts
                })

                return res.status(200).json({report: report, leaderboard: updatedRecord})
            }
        }

        return res.status(200).json(report)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const showReportsByCategory = async (req, res) => {
    const id = req.params.id

    try {
        const reports = await Report.find({category: id})
        res.status(200).json(reports)
    } catch(err) {
        res.json({error: err})
    }
}

export const showAllReports = async (req, res) => {
    try {
        const reports = await Report.find({})
        res.status(200).json(reports)
    } catch(err) {
        res.json({error: err})
    }
}

export const deleteReport = async (req, res) => {
    const id = req.body.id

    try {
        await Report.findByIdAndDelete(id)
        return res.status(200).json("Report Stats deleted")
    } catch(err) {
        res.json({error: err.message})
    }
}