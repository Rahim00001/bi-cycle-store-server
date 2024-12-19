/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TBiCycle = {
  serialNo: string;
  name: string;
  brand: string;
  price: number;
  type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
};

export interface BicycleModel extends Model<TBiCycle> {
  isBiCycleExists(serialNo: string): Promise<TBiCycle | null>;
}
