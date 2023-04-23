import mongoose from 'mongoose'

const LeaderBoardSchema = mongoose.Schema({
    gameID: {
        type: String, 
        default: ''
    },
    userID: {
        type: String, 
        default: ''
    },
    totalTime: {
        type: Number,
        default: 0
    },
    totalAttempts: {
        type: Number,
        default: 0
    },
    score: {
        type: Number,
        default: 0
    }
}, {timestamps : true})

const LeaderBoard = mongoose.model('LeaderBoard', LeaderBoardSchema)
export default LeaderBoard