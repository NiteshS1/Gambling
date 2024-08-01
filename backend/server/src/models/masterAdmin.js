import mongoose from 'mongoose';

const masterAdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['MasterAdmin'], default: 'MasterAdmin' },
    blocked: { type: Boolean, default: false },
    // Add any additional fields if needed
});

export default mongoose.model('MasterAdmin', masterAdminSchema);
