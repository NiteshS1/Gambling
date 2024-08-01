import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['User'], default: 'User' },
    bookieCode: { type: String, default: null},
    blocked: { type: Boolean, default: false },
    balance: { type: Number, default: 0 } // Example field for balance
});

export default mongoose.model('User', userSchema);
