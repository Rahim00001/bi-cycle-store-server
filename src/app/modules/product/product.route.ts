import express from 'express';
import { BiCycleController } from './product.controller';

const router = express.Router();

// will call controller function
router.post('/create-bicycle', BiCycleController.createBiCycle);

export const BiCycleRoute = router;
