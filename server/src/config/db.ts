import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        // Connect to MongoDB with the URI from the .env file
        const conn = await mongoose.connect(process.env.MONGO_URI || '');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Safely handle the error with TypeScript
        if (error instanceof Error) {
            console.error(`Database connection error: ${error.message}`);
        } else {
            console.error('Unknown database connection error.');
        }
        process.exit(1); // Exit the application with failure
    }
};

export default connectDB;
