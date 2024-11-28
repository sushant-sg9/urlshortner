import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import urlRoutes from './src/routes/urlRoutes.js'; 

dotenv.config();

const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://sushantghadge2016:Zg8BjIJQF7TdWzU1@cluster0.mk0sf.mongodb.net/';

const ConnectDB = async () => {
  try {
    if (!mongoURI) {
      throw new Error("MongoDB URI is undefined. Please set the MONGODB_URI environment variable.");
    }

    const connection = await mongoose.connect(mongoURI, {
    });

    console.log(`MongoDB Connected Successfully: ${connection.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};

ConnectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use('/api', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
