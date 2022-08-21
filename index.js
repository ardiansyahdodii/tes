import express from "express";
import cors from "cors";
import session from "express-session";
// import SequelizeStore from "connect-session-sequelize";
// import conn from "./config/koneksi.js";
import UserRoute from "./routes/userRoute.js";
import ProdukRoute from "./routes/produkRoute.js";
import AuthRoute from "./routes/authRoute.js";


const app = express();

// (async() =>{
//     await conn.sync();
// })();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(UserRoute);
app.use(ProdukRoute);
app.use(AuthRoute);

app.listen(5000, () =>{
    console.log('Server running at port 5000...');
});