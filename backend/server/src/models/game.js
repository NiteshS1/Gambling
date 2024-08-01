import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    bookieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bookie', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    gameType: { type: String, required: true },
    betAmount: { type: Number, required: true },
    winAmount: { type: Number },
    status: { type: String, enum: ['won', 'lost'], required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Game', GameSchema);
