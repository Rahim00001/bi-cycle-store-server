import express from 'express';
import { BiCycleController } from './product.controller';

const router = express.Router();

// create a new bicycle
router.post('/create-bicycle', BiCycleController.createBiCycle);

// get all available bicycles
router.get('/', BiCycleController.getAllBiCycles);

// get specific bicycle
router.get('/:serialNo', BiCycleController.getSingleBiCycle);

// deleted specific bicycle
router.delete('/:serialNo', BiCycleController.deleteSingleBiCycle);

export const BiCycleRoute = router;
