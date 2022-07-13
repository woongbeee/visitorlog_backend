import mongoose from 'mongoose';
import dotenv from 'dotenv';


mongoose.Promise = global.Promise;


dotenv.config();
const { MONGO_URI } = process.env;

export default function connection() {

    const connect = () => {
        mongoose
            .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Successfully connected to mongodb'))
            .catch(e => console.error(e));
    }
    connect();

    mongoose.connection.on('error', (error) => {
        console.log(`���� ��� ���� ���� : ${error}`)
    });

    mongoose.connection.on('disconnected', () => {
        console.log(`���� ��� ������ ���������ϴ� . `);
        connect();
    });
}