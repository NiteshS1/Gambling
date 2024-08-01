import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['deposit', 'withdrawal'], required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    bookieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bookie', required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Request', RequestSchema);
