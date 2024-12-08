import express from 'express';
import { BiCycleController } from './product.controller';

const router = express.Router();

// create a new bicycle
router.post('/create-bicycle', BiCycleController.createBiCycle);

// get all available bicycles
router.get('/', BiCycleController.getAllBiCycles)


export const BiCycleRoute = router;
