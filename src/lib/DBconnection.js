import mongoose from 'mongoose';

const connectDB = async () => { 
    try {
        const uri = process.env.MONGODB_URI ;
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in .env.local');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to the database');
    } catch (err) {
        console.error('Database connection error:', err.message);
        throw err;
    }
};

export default connectDB;