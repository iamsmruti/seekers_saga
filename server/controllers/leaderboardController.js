import LeaderBoard from "../models/LeaderBoard.js"

// get all the records in the leaderboard
export const getAll = async (req, res) => {
    const id = req.params.id
    
    try {
        const records = await LeaderBoard.find({gameID: id}).sort({score: -1})

        res.status(200).json(records)
    } catch(err) {
        res.status(500).json(err.message)
    }
}