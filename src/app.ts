import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BiCycleRoute } from './app/modules/product/product.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/bicycles', BiCycleRoute);

const getAController = (req: Request, res: Response) => {
  const a = 'Hello World! ✨';
  res.send(a);
};

app.get('/', getAController);

export default app;
