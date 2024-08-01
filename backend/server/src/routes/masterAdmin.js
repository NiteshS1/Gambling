import express from 'express';
import { 
    createBookie, 
    blockUser, 
    unblockUser, 
    deleteUser, 
    updateUser, 
    blockBookie, 
    unblockBookie, 
    deleteBookie, 
    updateBookie,
    registerMasterAdmin,
    loginMasterAdmin,
    logoutMasterAdmin,
    getAllBookies,
    getAllUsers
} from '../controllers/masterAdminController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerMasterAdmin);
router.post('/login', loginMasterAdmin);
router.post('/logout', logoutMasterAdmin);

router.post('/create-bookie', [authenticate, authorize(['MasterAdmin'])], createBookie);

router.put('/block-user/:userId', [authenticate, authorize(['MasterAdmin'])], blockUser);
router.put('/unblock-user/:userId', [authenticate, authorize(['MasterAdmin'])], unblockUser);
router.delete('/delete-user/:userId', [authenticate, authorize(['MasterAdmin'])], deleteUser);
router.put('/update-user/:userId', [authenticate, authorize(['MasterAdmin'])], updateUser);

router.put('/block-bookie/:bookieId', [authenticate, authorize(['MasterAdmin'])], blockBookie);
router.put('/unblock-bookie/:bookieId', [authenticate, authorize(['MasterAdmin'])], unblockBookie);
router.delete('/delete-bookie/:bookieId', [authenticate, authorize(['MasterAdmin'])], deleteBookie);
router.put('/update-bookie/:bookieId', [authenticate, authorize(['MasterAdmin'])], updateBookie);

router.get('/bookies', [authenticate, authorize(['MasterAdmin'])], getAllBookies);
router.get('/users', [authenticate, authorize(['MasterAdmin'])], getAllUsers);

export default router;
