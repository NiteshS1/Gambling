import express from 'express';
const router = express.Router();
import { 
    registerUser, 
    loginUser, 
    requestTransaction, 
    updateUserData, 
    changeBookieCode, 
    withdrawMoney, 
    logoutUser,
    submitBookieCode
} from '../controllers/userController.js';
import { authenticate, authorize } from '../middleware/auth.js';

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

// Protected Routes
router.post('/request-transaction', [authenticate, authorize(['User'])], requestTransaction);
router.put('/update-data', [authenticate, authorize(['User'])], updateUserData);
router.put('/change-bookie-code', [authenticate, authorize(['User'])], changeBookieCode);
router.post('/withdraw', [authenticate, authorize(['User'])], withdrawMoney);
router.post('/logout', [authenticate, authorize(['User'])], logoutUser);
router.post('/submit-bookie-code',  [authenticate, authorize(['User'])], submitBookieCode);

export default router;
