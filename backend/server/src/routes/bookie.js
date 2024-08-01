import express from 'express';
const router = express.Router();
import { 
    getTransactions, 
    acceptTransaction, 
    rejectTransaction, 
    blockUser, 
    unblockUser, 
    deleteUser, 
    updateUser,
    loginBookie,
    logoutBookie,
    updateProfile,
    viewGameHistory,
    sendTokens,
    viewUserRequests,
    handleUserRequest,
    getUsersByBookie
} from '../controllers/bookieController.js';
import { authenticate, authorize } from '../middleware/auth.js';

// Login Bookie
router.post('/login', loginBookie);

// Logout Bookie
router.post('/logout', [authenticate, authorize(['Bookie'])], logoutBookie);

// Get Transactions
router.get('/transactions', [authenticate, authorize(['Bookie'])], getTransactions);

// Accept Transaction
router.put('/transactions/accept/:transactionId', [authenticate, authorize(['Bookie'])], acceptTransaction);

// Reject Transaction
router.put('/transactions/reject/:transactionId', [authenticate, authorize(['Bookie'])], rejectTransaction);

// Block User
router.put('/users/block/:userId', [authenticate, authorize(['Bookie'])], blockUser);

// Unblock User
router.put('/users/unblock/:userId', [authenticate, authorize(['Bookie'])], unblockUser);

// Delete User
router.delete('/users/:userId', [authenticate, authorize(['Bookie'])], deleteUser);

// Update User
router.put('/users/:userId', [authenticate, authorize(['Bookie'])], updateUser);

// Update Profile
router.put('/update-profile', [authenticate, authorize(['Bookie'])], updateProfile);

// View Game History
router.get('/games/history', [authenticate, authorize(['Bookie'])], viewGameHistory);

// Send Tokens
router.post('/tokens/send', [authenticate, authorize(['Bookie'])], sendTokens);

// View User Requests
router.get('/user-requests', [authenticate, authorize(['Bookie'])], viewUserRequests);

// Handle User Request
router.put('/user-requests/:requestId', [authenticate, authorize(['Bookie'])], handleUserRequest);

// Get users associated with a specific bookie
router.get('/users', [authenticate, authorize(['Bookie'])], getUsersByBookie);

export default router;
