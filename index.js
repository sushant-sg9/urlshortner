import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import urlRoutes from './src/routes/urlRoutes.js'; 


dotenv.config();
const mongoURI = 'mongodb+srv://sushantghadge2016:Zg8BjIJQF7TdWzU1@cluster0.mk0sf.mongodb.net/';
const ConnectDB = async () => {
  try {
      const connection = await mongoose.connect(mongoURI, {
          useUnifiedTopology: true,
          useNewUrlParser: true
      });

      console.log(`MongoDB Connected Successfully: ${connection.connection.host}`);
  }
  catch(err) {
      console.log(`Error: ${err.message}`);
      process.exit();

  }
}
ConnectDB()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send("API is Running Sucessfully");
})
app.use('/api', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app; 
