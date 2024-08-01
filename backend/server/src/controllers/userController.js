import Transaction from '../models/transaction.js';
import User from '../models/user.js';
import Bookie from '../models/bookie.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// controllers/userController.js
export const registerUser = async (req, res) => {
    const { name, email, password, bookieCode } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        user = new User({ name, email, password, bookieCode }); // Include bookieCode
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        res.json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login User with Bookie Code Verification
export const loginUser = async (req, res) => {
    const { email, password, bookieCode } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        // If all checks pass, generate JWT token
        const payload = { user: { id: user.id, role: user.role } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const submitBookieCode = async (req, res) => {
    const { bookieCode } = req.body;
    const userId = req.user.id; // Assuming the user ID is available in req.user

    try {
        const bookie = await Bookie.findOne({ bookieCode });
        if (!bookie) {
            return res.status(400).json({ msg: 'Invalid bookie code' });
        }

        // Add the user ID to the bookie's users array if not already present
        if (!bookie.users.includes(userId)) {
            bookie.users.push(userId);
            await bookie.save();
        }

        res.json({ msg: 'Bookie code accepted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


export const requestTransaction = async (req, res) => {
    const { amount, type } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(400).json({ msg: 'User not found' });

        const transaction = new Transaction({
            userId: req.user.id,
            bookieId: user.bookieCode, // Access bookieCode from the user object
            amount,
            type
        });

        await transaction.save();
        res.json({ msg: 'Transaction request created' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error No request send');
    }
};

export const updateUserData = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const updateData = { name, email };
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        await User.findByIdAndUpdate(req.user.id, updateData, { new: true });
        res.json({ msg: 'User data updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const changeBookieCode = async (req, res) => {
    const { bookieCode } = req.body;
    try {
        await User.findByIdAndUpdate(req.user.id, { bookieCode });
        res.json({ msg: 'Bookie code changed successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const withdrawMoney = async (req, res) => {
    const { amount } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (user.balance < amount) return res.status(400).json({ msg: 'Insufficient balance' });

        user.balance -= amount;
        await user.save();
        res.json({ msg: 'Withdrawal successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Logout MasterAdmin
export const logoutUser = (req, res) => {
    // Invalidate JWT by client-side implementation
    res.json({ msg: 'Logged out successfully' });
};
