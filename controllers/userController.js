import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const getUser = async (req, res) => {
    try {
        const response = await User.findAll();
        res.json(response);
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id_user: req.params.id_user
            }
        });
        res.json(response);
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const createUser = async (req, res) => {
    const { username, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.json({ pesan: "Password dan confirm password tidak sesuai" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await User.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.json({ pesan: "Register Berhasil" });
    } catch (error) {
        res.json({ pesan: error });
    }
}

export const updateUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id_user: req.params.id_user
        }
    });
    if (!user) return res.json({ pesan: "User tidak ditemukan" });

    const { username, email, password, confPassword } = req.body;


    let hashPassword;
    const salt = await bcrypt.genSalt();
    if (password === "" || password === null) {

        hashPassword = user.password;
    } else {

        hashPassword = await bcrypt.hash(password, salt);
    }
    if (password !== confPassword) return res.json({ pesan: "Password dan confirm password tidak sesuai" });

    try {
        await User.update({
            username: username,
            email: email,
            password: hashPassword
        }, {
            where: {
                id_user: user.id_user
            }
        });
        res.json({ pesan: "User diperbarui" })
    } catch (error) {
        res.json({ pesan: error })
    }

}

export const deleteUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id_user: req.params.id_user
        }
    });
    if (!user) return res.json({ pesan: "User tidak ditemukan" });

    try {
        await User.destroy({
            where: {
                id_user: user.id_user
            }
        });
        res.json({ pesan: "User dihapus" })
    } catch (error) {
        res.json({ pesan: error })
    }
}


