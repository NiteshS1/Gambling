import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    bookieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bookie', required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Token', TokenSchema);
