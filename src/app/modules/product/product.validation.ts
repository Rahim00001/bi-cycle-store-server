import { z } from 'zod';

const biCycleValidationSchema = z.object({
  serialNo: z.string().min(1, 'Serial number is required').max(6),
  name: z.string().min(1, 'BiCycle name must be given').trim(),
  brand: z.string().min(1, 'BiCycle brand is required').trim(),
  price: z.number().min(1, 'BiCycle price is required'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    errorMap: () => ({ message: 'Invalid biCycle type' }),
  }),
  description: z.string().min(1, 'BiCycle description is required').trim(),
  quantity: z.number().min(1, 'BiCycle quantity is required'),
  inStock: z.boolean().default(true),
});

export default biCycleValidationSchema;
