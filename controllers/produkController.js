import Produk from "../models/produkModel.js";

export const getProduk = async (req, res) => {
    try {
        const response = await Produk.findAll();
        res.json(response);
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const getProdukById = async (req, res) => {
    try {
        const response = await Produk.findOne({
            where: {
                id_produk: req.params.id_produk
            }
        });
        res.json(response);
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const createProduk = async(req, res) => {
    try {
        await Produk.create(req.body);
        res.json({msg: "Produk ditambah"});
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const updateProduk = async(req, res) => {
    const produk = await Produk.findOne({
        where: {
            id_produk: req.params.id_produk
        }
    });
    if (!produk) return res.json({ pesan: "Produk tidak ditemukan" });
    try {
        await Produk.update(req.body,{
            where:{
                id_produk: req.params.id_produk
            }
        });
        res.json({msg: "Produk Diperbarui"});
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const deleteProduk = async(req, res) => {
    const produk = await Produk.findOne({
        where: {
            id_produk: req.params.id_produk
        }
    });
    if (!produk) return res.json({ pesan: "Produk tidak ditemukan" });

    try {
        await Produk.destroy({
            where: {
                id_produk: user.id_produk
            }
        });
        res.json({ pesan: "Produk dihapus" });
    } catch (error) {
        res.json({ pesan: error });
    }

}


