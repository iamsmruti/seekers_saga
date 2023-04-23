import mongoose from 'mongoose'

const HuntReportSchema = mongoose.Schema({
    name: {
        type: String, 
        default: ''
    },
    user: {
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
    stats: {
        type: Array,
        default: []
    },
    score: {
        type: Number,
        default: 0
    }
}, {timestamps : true})

const HuntReport = mongoose.model('HuntReport', HuntReportSchema)
export default HuntReport