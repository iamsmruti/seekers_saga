import HuntReport from '../models/HuntReport.js'

export const createReport = async (req, res) => {
    const user = req.user

    try {
        const newHunt = new HuntReport({
            name: req.body.name,
            user: user.email,
            score: req.body.score,
            stats: req.body.stats,
            totalTime: req.body.totalTime,
            totalAttempts: req.body.totalAttempts
        })

        const hunt = await newHunt.save()

        const foundUser = await LeaderBoard.find({user: user.email})
        console.log(foundUser)
        // console.log(foundUser)

        // if(foundUser.length === 0){

        //     console.log("working")
        //     const newRecord = new LeaderBoard({
        //         name: req.body.name,
        //         user: user.email,
        //         score: req.body.score,
        //         totalTime: req.body.totalTime,
        //         totalAttempts: req.body.totalAttempts
        //     })

        //     const record = await newRecord.save()
        //     return res.status(200).json({puzzle: hunt, leaderboard: record})
        // }  
        
        // if (foundUser.length > 0){
        //     if(foundUser[0].score < req.body.score){
        //         console.log("first")
        //         const updatedRecord = await LeaderBoard.findByIdAndUpdate(foundUser[0]._id, {
        //             name: req.body.name,
        //             user: user.email,
        //             score: req.body.score,
        //             totalTime: req.body.totalTime,
        //             totalAttempts: req.body.totalAttempts
        //         })

        //         return res.status(200).json({puzzle: hunt, leaderboard: updatedRecord})
        //     }
        // }

        return res.status(200).json(hunt)
    } catch (err) {
        res.status(500).json(err.message)
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

export const deleteReport = async (req, res) => {
    const id = req.body.id
    console.log(id)

    try {
        await HuntReport.findByIdAndDelete(id)
        return res.status(200).json("Puzzle Stats deleted")
    } catch(err) {
        res.json({error: err.message})
    }
}