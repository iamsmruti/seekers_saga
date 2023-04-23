import mongoose from 'mongoose'

const ReportSchema = mongoose.Schema({
    name: {
        type: String, 
        default: '',
        unique: false
    },
    category: {
        type: String,
        default: ''
    },
    user: {
        type: String, 
        default: '',
        unique: false
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

const Report = mongoose.model('Report', ReportSchema)
export default Report