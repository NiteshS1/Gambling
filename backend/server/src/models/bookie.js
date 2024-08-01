import mongoose from 'mongoose';

const bookieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bookieCode: { type: String, required: true, unique: true },
    blocked: { type: Boolean, default: false },
    balance: { type: Number, default: 0 }, // Example field for balance
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Array of user references
});

export default mongoose.model('Bookie', bookieSchema);
