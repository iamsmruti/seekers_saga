import LeaderBoard from "../models/LeaderBoard.js"

export const getAll = async (req, res) => {
    const id = req.params.id

    try {
        const records = await LeaderBoard.find({name: id})

        res.status(200).json(records)
    } catch(err) {
        res.status(500).json(err.message)
    }
}