import mongoose from 'mongoose'


const { Schema } = mongoose;


const visitorSchema = new Schema({
    count: {
        type: Number,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    }

})
const Visitors = mongoose.model('Visitors', visitorSchema);

export default Visitors;