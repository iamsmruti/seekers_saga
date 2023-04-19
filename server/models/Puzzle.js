import mongoose from 'mongoose'

const PuzzleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    timePerImage: {
        type: Number,
        default: 20
    }
}, {timestamps : true})

const Puzzle = mongoose.model('Puzzle', PuzzleSchema)
export default Puzzle