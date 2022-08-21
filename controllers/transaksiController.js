import Transaksi from "../models/transaksiModel.js";
import User from "../models/userModel.js";
import Produk from "../models/produkModel.js";

export const getTransaksi = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Transaksi.findAll({
                // attributes: ['id_user', 'id_produk'],
                include: [{
                    model: User, Produk,
                    // attributes: ['username']
                }]
            });
        } else {
            response = await Transaksi.findAll({
                // attributes: ['id_user', 'id_produk'],
                where: {
                    id_user: req.id_user
                },
                include: [{
                    model: User,Produk,
                    // attributes: ['username', 'kode']
                }]
            });
        }
        res.json(response);
    } catch (error) {
        res.json({ msg: error });
    }
}

export const getTransaksiById = async (req, res) => {
    try {
        const response = await Transaksi.findOne({
            where: {
                id_transaksi: req.params.id_transaksi
            }
        });
        res.json(response);
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const createTransaksi = async (req, res) => {
    const {id_produk} = req.body;
    try {
        await Transaksi.create({
            id_produk: id_produk,
            id_user: req.id_user
        });
        res.json({pesan: "transaksi berhasil dibuat"});
    } catch (error) {
        res.json({msg: error});
    }
}

export const updateTransaksi = async (req, res) => {
    const transaksi = await Transaksi.findOne({
        where: {
            id_transaksi: req.params.id_transaksi
        }
    });
    if (!transaksi) return res.json({ pesan: "Transaksi tidak ditemukan" });
    try {
        await Transaksi.update(req.body, {
            where: {
                id_transaksi: req.params.id_transaksi
            }
        });
        res.json({ msg: "Transaksi Diperbarui" });
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const deleteTransaksi = async (req, res) => {
    const transaksi = await Transaksi.findOne({
        where: {
            id_transaksi: req.params.id_transaksi
        }
    });
    if (!transaksi) return res.json({ pesan: "Transaksi tidak ditemukan" });

    try {
        await Transaksi.destroy({
            where: {
                id_transaksi: user.id_transaksi
            }
        });
        res.json({ pesan: "Transaksi dihapus" });
    } catch (error) {
        res.json({ pesan: error });
    }

}


