/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import biCycleValidationSchema from './product.validation';
import { BicycleServices } from './product.service';

const createBiCycle = async (req: Request, res: Response) => {
    try {
      const { biCycle: biCycleData } = req.body;
  
      // data validation using zod
      const zodParseData = biCycleValidationSchema.parse(biCycleData);
  
      // will call service func to send this data
      const result = await BicycleServices.createBiCycleIntoDB(zodParseData);
      // send response
      res.status(200).json({
        success: true,
        message: 'BiCycle is creted successfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Somthing went wrong',
        error: err,
      });
    }
  };

  const getAllBiCycles = async (req: Request, res: Response) => {
    try {
      const result = await BicycleServices.getAllBiCycleFromDB();
  
      res.status(200).json({
        success: true,
        message: 'BiCycle retrieved successfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Somthing went wrong',
        error: err,
      });
    }
  };

  export const BiCycleController = {
    createBiCycle,
    getAllBiCycles,
  };