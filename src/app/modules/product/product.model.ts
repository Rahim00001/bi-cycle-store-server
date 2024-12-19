import { Schema, model } from 'mongoose';
import { BicycleModel, TBiCycle } from './product.interface';

const biCycleSchema = new Schema<TBiCycle, BicycleModel>(
  {
    serialNo: {
      type: String,
      required: [true, 'Serial number must be given'],
      maxlength: [6, 'Serial number can not be more than 6 characters'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'BiCycle name must be given'],
      unique: true,
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand name must be given'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'BiCycle price must be given'],
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message: '{VALUE} is not a valid bicycle type',
      },
      required: [true, 'BiCycle type must be given'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'BiCycle discription must be given'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'BiCycle quantity must be given'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Enable timestamps
  },
);

// Query middlewares
biCycleSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

biCycleSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

biCycleSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

biCycleSchema.statics.isBiCycleExists = async function (id: string) {
  const existingBiCycle = await BiCycle.findOne({ id });
  return existingBiCycle;
};

export const BiCycle = model<TBiCycle, BicycleModel>('BiCycle', biCycleSchema);
