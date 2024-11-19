import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || '');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Database connection error: ${error.message}`);
        } else {
            console.error('Unknown database connection error.');
        }
        process.exit(1); 
    }
};

export default connectDB;
