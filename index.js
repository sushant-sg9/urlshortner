import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import urlRoutes from './src/routes/urlRoutes.js'; 
const mongoURI = process.env.MONGODB_URI;

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));



app.get("/", (req, res) => {
    res.send("API is Running Sucessfully");
})
app.use('/api', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app; 
