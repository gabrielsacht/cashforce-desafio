import express, { Request, Response } from 'express';
import orderRouter from './routes/orders.router'
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.APP_PORT;

app.use('/orders', orderRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});