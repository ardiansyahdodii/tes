import express from "express";
import {getProduk, getProdukById, createProduk, updateProduk, deleteProduk} from "../controllers/produkController.js";
import {verifyUser, adminOnly} from "../middleware/authUser.js"
const router = express.Router();

router.get('/produk', verifyUser, getProduk);
router.get('/produk/:id_produk', verifyUser, getProdukById);
router.post('/produk', verifyUser, adminOnly, createProduk);
router.patch('/produk/:id_produk', adminOnly, verifyUser, updateProduk);
router.delete('/produk/:id_Produk', adminOnly, verifyUser, deleteProduk);

export default router;
