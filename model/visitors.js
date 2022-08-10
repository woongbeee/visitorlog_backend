import mongoose from 'mongoose'


const { Schema } = mongoose;


const visitorSchema = new Schema({
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
        type: String,
        required: true,
    },

})
const Visitors = mongoose.model('Visitors', visitorSchema);

export default Visitors;