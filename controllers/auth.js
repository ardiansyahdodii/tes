import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const Login = async(req, res) =>{
    const user = await User.findAll({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.json({pesan: "User tidak ditemukan"});
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if(!match) return res.json({pesan: "wrong password"});
    req.session.id_user = user[0].id_user;
    const id_user = user[0].id_user;
    const username = user[0].username;
    const email = user[0].email;
    const role = user[0].role;
    res.json({id_user, username, email, role})

}

export const Me = async (req, res) => {
    if(!req.session.id_user){
        return res.json({pesan: "Mohon login terlebih dahulu"});
    }
    const user = await User.findOne({
        attributes:['id_user','username','email','role'],
        where: {
            id_user: req.session.id_user
        }
    });
    if(!user) return res.json({pesan: "User tidak ditemukan"});
    res.json(user);
}

export const Logout = (req, res) => {
    req.session.destroy((err) =>{
        if(err) return res.json({pesan: "tidak dapat logout"});
        res.json({pesan: "Anda telah logout"});
    });
}
