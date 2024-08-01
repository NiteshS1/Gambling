import Transaction from '../models/transaction.js';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Bookie from '../models/bookie.js';
import Game from '../models/game.js'; // Assuming you have a Game model for game history
import Token from '../models/token.js'; // Assuming you have a Token model for managing tokens

// Login Bookie
export const loginBookie = async (req, res) => {
    const { email, password } = req.body;

    try {
        const bookie = await Bookie.findOne({ email });
        if (!bookie) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, bookie.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: bookie.id, role: 'Bookie' } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Logout Bookie
export const logoutBookie = (req, res) => {
    // Invalidate JWT by client-side implementation
    res.json({ msg: 'Logged out successfully' });
};

// Get Transactions
export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ bookieId: req.user.id });
        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const acceptTransaction = async (req, res) => {
    const { transactionId } = req.params;
    try {
        // Find the transaction
        const transaction = await Transaction.findById(transactionId);
        if (!transaction) return res.status(404).json({ msg: 'Transaction not found' });

        // Find the user associated with the transaction
        const user = await User.findById(transaction.userId);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        // Update the transaction status
        transaction.status = 'accepted';
        await transaction.save();

        // Update the user's balance
        user.balance += transaction.amount; // Assuming all transactions are credits

        // Ensure the balance does not go below zero
        if (user.balance < 0) return res.status(400).json({ msg: 'Insufficient balance' });

        await user.save();
        res.json({ msg: 'Transaction accepted and user balance updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


// Reject Transaction
export const rejectTransaction = async (req, res) => {
    const { transactionId } = req.params;
    try {
        await Transaction.findByIdAndUpdate(transactionId, { status: 'rejected' });
        res.json({ msg: 'Transaction rejected' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Block User
export const blockUser = async (req, res) => {
    const { userId } = req.params;
    try {
        await User.findByIdAndUpdate(userId, { blocked: true });
        res.json({ msg: 'User blocked' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Unblock User
export const unblockUser = async (req, res) => {
    const { userId } = req.params;
    try {
        await User.findByIdAndUpdate(userId, { blocked: false });
        res.json({ msg: 'User unblocked' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        await User.findByIdAndDelete(userId);
        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update User
export const updateUser = async (req, res) => {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    try {
        const updateData = { name, email };
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        await User.findByIdAndUpdate(userId, updateData, { new: true });
        res.json({ msg: 'User updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update Profile
export const updateProfile = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const updateData = { name, email };
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        const bookie = await Bookie.findByIdAndUpdate(req.user.id, updateData, { new: true });
        res.json({ msg: 'Profile updated successfully', bookie });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// View Game History
export const viewGameHistory = async (req, res) => {
    try {
        const gameHistory = await Game.find({ bookieId: req.user.id });
        res.json(gameHistory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Send Tokens
export const sendTokens = async (req, res) => {
    const { userId, amount } = req.body;
    try {
        // Assuming you have a Token model for token transactions
        await Token.create({ userId, amount, bookieId: req.user.id });
        res.json({ msg: 'Tokens sent successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// View User Requests
export const viewUserRequests = async (req, res) => {
    try {
        // Assuming you have a Request model for user requests
        const userRequests = await Request.find({ bookieId: req.user.id });
        res.json(userRequests);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Handle User Request
export const handleUserRequest = async (req, res) => {
    const { requestId } = req.params;
    const { status } = req.body;
    try {
        await Request.findByIdAndUpdate(requestId, { status });
        res.json({ msg: 'User request handled successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get users associated with a specific bookie
export const getUsersByBookie = async (req, res) => {
    try {
        // Assuming the bookie ID is available in req.user.id after authentication
        const bookieId = req.user.id;

        // Fetch users associated with the bookie
        const users = await User.find({ bookieId }); // Make sure your User schema includes a bookieId field

        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};