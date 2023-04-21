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
        default: {
            grade: {
                type: String,
                default: ''
            },
            remark: {
                type: String,
                default: ''
            },
            score: {
                type: Number,
                default: 0
            }
        }
    },
    accuracy: {
        type: Object,
        default: {
            grade: {
                type: String,
                default: ''
            },
            remark: {
                type: String,
                default: ''
            },
            score: {
                type: Number,
                default: 0
            }
        }
    },
    intellectual: {
        type: Object,
        default: {
            grade: {
                type: String,
                default: ''
            },
            remark: {
                type: String,
                default: ''
            },
            score: {
                type: Number,
                default: 0
            }
        }
    }
}, {timestamps : true})

const HuntReport = mongoose.model('HuntReport', HuntReportSchema)
export default HuntReport