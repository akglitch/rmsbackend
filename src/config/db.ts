import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://ak:recorddb@cluster0.mzj7oqr.mongodb.net/records?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected');
  } catch (err: any) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

export default connectDB;
