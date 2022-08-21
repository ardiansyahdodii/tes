import User from "../models/userModel.js";

export const verifyUser = async (req, res, next) => {
    if(!req.session.id_user){
        return res.json({pesan: "Mohon login terlebih dahulu"});
    }
    const user = await User.findOne({
        where: {
            id_user: req.session.id_user
        }
    });
    if(!user) return res.json({pesan: "User tidak ditemukan"});
    req.id_user = user.id_user;
    req.role = user.role;
    next();
}

export const adminOnly = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            id_user: req.session.id_user
        }
    });
    if(!user) return res.json({pesan: "User tidak ditemukan"});
    if(user.role !== "admin") return res.json({pesan:"Forbidden!!!"})
    next();
}