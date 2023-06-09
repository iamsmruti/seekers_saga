import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: Array,
        default: ['seeker']
    }
}, {timestamps : true})

const User = mongoose.model('User', UserSchema)
export default User