import { TBiCycle } from './product.interface';
import { BiCycle } from './product.model';

const createBiCycleIntoDB = async (biCycleData: TBiCycle) => {
  if (await BiCycle.isBiCycleExists(biCycleData.serialNo)) {
    throw new Error('BiCycle already exists!');
  }

  const result = await BiCycle.create(biCycleData);
  return result;
};

const getAllBiCycleFromDB = async () => {
  const result = await BiCycle.find();
  return result;
};

const getSingleBiCycleFromDB = async (serialNo: string) => {
  // const result = await BiCycle.findOne({ serialNo });

  const result = await BiCycle.aggregate([{ $match: { serialNo: serialNo } }]);

  return result;
};

// delete a bicycle from DB
const deleteSingleBiCycleFromDB = async (serialNo: string) => {
  const result = await BiCycle.updateOne({ serialNo }, { isDeleted: true });
  return result;
};

export const BicycleServices = {
  createBiCycleIntoDB,
  getAllBiCycleFromDB,
  getSingleBiCycleFromDB,
  deleteSingleBiCycleFromDB,
};
