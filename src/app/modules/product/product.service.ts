import { TBiCycle } from "./product.interface";
import { BiCycle } from "./product.model";

const createBiCycleIntoDB = async (biCycleData: TBiCycle) => {
    if (await BiCycle.isBiCycleExists(biCycleData.serialNo)) {
      throw new Error('BiCycle already exists!');
    }

    const result = await BiCycle.create(biCycleData);
    return result;
};

export const BicycleServices = {
    createBiCycleIntoDB,
}