import express from "express";
import {getTransaksi, getTransaksiById, createTransaksi, updateTransaksi, deleteTransaksi} from "../controllers/TransaksiController.js";
import {verifyUser} from "../middleware/authUser.js"
const router = express.Router();

router.get('/transaksi', verifyUser, getTransaksi);
router.get('/transaksi/:id_Transaksi', verifyUser, getTransaksiById);
router.post('/transaksi', verifyUser, createTransaksi);
router.patch('/transaksi/:id_Transaksi', verifyUser, updateTransaksi);
router.delete('/transaksi/:id_Transaksi', verifyUser, deleteTransaksi);

export default router;