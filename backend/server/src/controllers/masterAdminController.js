import Bookie from '../models/bookie.js';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import MasterAdmin from '../models/masterAdmin.js';

// Register MasterAdmin
export const registerMasterAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let admin = await MasterAdmin.findOne({ email });
        if (admin) return res.status(400).json({ msg: 'MasterAdmin already exists' });

        admin = new MasterAdmin({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);
        await admin.save();

        res.json({ msg: 'MasterAdmin registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login MasterAdmin
export const loginMasterAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await MasterAdmin.findOne({ email });
        if (!admin) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: admin.id, role: 'MasterAdmin' } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Logout MasterAdmin
export const logoutMasterAdmin = (req, res) => {
    // Invalidate JWT by client-side implementation
    res.json({ msg: 'Logged out successfully' });
};

export const createBookie = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let bookie = await Bookie.findOne({ email });
        if (bookie) return res.status(400).json({ msg: 'Bookie already exists' });

        const bookieCode = `BOOKIE${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        bookie = new Bookie({ name, email, password, bookieCode });

        const salt = await bcrypt.genSalt(10);
        bookie.password = await bcrypt.hash(password, salt);
        await bookie.save();

        res.json({ msg: 'Bookie created successfully', bookieCode });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

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

export const blockBookie = async (req, res) => {
    const { bookieId } = req.params;
    try {
        await Bookie.findByIdAndUpdate(bookieId, { blocked: true });
        res.json({ msg: 'Bookie blocked' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const unblockBookie = async (req, res) => {
    const { bookieId } = req.params;
    try {
        await Bookie.findByIdAndUpdate(bookieId, { blocked: false });
        res.json({ msg: 'Bookie unblocked' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const deleteBookie = async (req, res) => {
    const { bookieId } = req.params;
    try {
        await Bookie.findByIdAndDelete(bookieId);
        res.json({ msg: 'Bookie deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const updateBookie = async (req, res) => {
    const { bookieId } = req.params;
    const { name, email, password } = req.body;
    try {
        const updateData = { name, email };
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        await Bookie.findByIdAndUpdate(bookieId, updateData, { new: true });
        res.json({ msg: 'Bookie updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Show all bookies
export const getAllBookies = async (req, res) => {
    try {
        const bookies = await Bookie.find().select('-password');
        res.json(bookies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Show all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};