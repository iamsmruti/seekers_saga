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
    speed: {
        type: Object,
        default: {}
    },
    Accuracy: {
        type: Object,
        default: {}
    },
    Intellectual: {
        type: Object,
        default: {}
    }
}, {timestamps : true})

const HuntReport = mongoose.model('HuntReport', HuntReportSchema)
export default HuntReport