import LeaderBoard from '../models/LeaderBoard.js'
import PuzzleReport from '../models/PuzzleReport.js'

export const createReport = async (req, res) => {
    const user = req.user

    try {
        const newPuzzle = new PuzzleReport({
            name: req.body.name,
            user: user.email,
            score: req.body.score,
            stats: req.body.stats,
            totalTime: req.body.totalTime,
            totalAttempts: req.body.totalAttempts
        })

        const puzzle = await newPuzzle.save()

        const foundUser = await LeaderBoard.find({user: user.email, name: req.body.name})

        if(foundUser.length === 0){
            const newRecord = new LeaderBoard({
                name: req.body.name,
                user: user.email,
                score: req.body.score,
                totalTime: req.body.totalTime,
                totalAttempts: req.body.totalAttempts
            })

            const record = await newRecord.save()
            return res.status(200).json({puzzle: puzzle, leaderboard: record})
        }  
        
        if (foundUser.length > 0){
            if(foundUser[0].score < req.body.score){
                const updatedRecord = await LeaderBoard.findByIdAndUpdate(foundUser[0]._id, {
                    name: req.body.name,
                    user: user.email,
                    score: req.body.score,
                    totalTime: req.body.totalTime,
                    totalAttempts: req.body.totalAttempts
                })

                return res.status(200).json({puzzle: puzzle, leaderboard: updatedRecord})
            }
        }

        return res.status(200).json(puzzle)
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
        res.json({error: err.message})
    }
}

export const deleteReport = async (req, res) => {
    const id = req.body.id
    console.log(id)

    try {
        await PuzzleReport.findByIdAndDelete(id)
        return res.status(200).json("Puzzle Stats deleted")
    } catch(err) {
        res.json({error: err.message})
    }
}