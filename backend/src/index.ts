import express from "express";
import type { Request,Response ,NextFunction} from "express";
import cors from 'cors';
import {connectMongoose} from './config/jobPortalDB'
import AuthRoute from './routes/authRoutes'
import UserRoute from './routes/userRoute'
import JobRoute from './routes/jobRoute'
import applicationRoute from './routes/applicationRoute'
const app = express();
import dotenv from "dotenv";
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
};
dotenv.config();
app.use(cors(corsOptions))
app.use(express.json());
const PORT= process.env.PORT||5000;
app.use('/api/auth', AuthRoute);
app.use('/api/users', UserRoute);
app.use('/api/jobs', JobRoute);
app.use('/api/applications', applicationRoute );
connectMongoose();
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
