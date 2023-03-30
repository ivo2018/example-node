import express from "express";
import cors from "cors";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51Mp2YHCMWK3SyzV82RL9gs6HDhJbe9jZO8Ouqxyg4ADjlRd0coeBmlndnytOo5ZZj5niENzvO8PafLkAYSV9Sdn2003zpuGOqM"
);
import db from "./database/db.js";
import Routes1 from "./routes/routes.js";
import Routes2 from "./routes/admin/routesDestacados.js";
import Routes3 from "./routes/admin/routesProductos.js";
import routerAdmin from "./routes/admin/routesAdmin.js";
import Routes4 from "./routes/routesUsers.js";
import routerUserDestacados from "./routes/users/routesDestacados.js";
import routerUserProductos from "./routes/users/routesProductos.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import mysql from "mysql";
import routerUserCompra from "./routes/users/routesCompra.js";
import routerUserPedidos from "./routes/users/routesPedido.js";
//import bcrypt from "bcrypt";
//const saltRounds = 10;
//import jwt from "jsonwebtoken";
const app = express();
//app.use(bodyParser.json({ limit: "50mb" }));
//app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: 52428800 }));

app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/users", Routes4);
app.use("/admin/destacados", Routes2);
app.use("/admin/productos", Routes3);
app.use("/blogs", Routes1);

app.use("/destacados", routerUserDestacados);
app.use("/shop", routerUserProductos);
app.use("/compras", routerUserCompra);
app.use("/pedidos", routerUserPedidos);
app.use("/admin", routerAdmin);
/*
app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 10 * 60 * 20 * 30,
    },
  })
);*/

try {
  await db.authenticate();
  console.log("conexion exitosa");
} catch (error) {
  console.log(`errror de conexion :${error} `);
}
app.post("/api/checkout", async (req, res) => {
  // you can get more data to find in a database, and so on
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});
/*
const dbb = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "dartearte",
});
*/
/*
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const rol = "cliente";
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    dbb.query(
      "INSERT INTO users (username, password,rol) VALUES (?,?,?)",
      [username, hash, rol],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    req.send("yo , we need a token , please ");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "u failed to autenticated" });
      } else {
        req.idUser = decoded.id;
        next();
      }
    });
  }
};
app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("yo, u are authenticated congrats");
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  dbb.query(
    "SELECT * FROM users WHERE username = ?",
    username,

    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            const id = result[0].id;
            const token = jwt.sign({ id }, "jwtSecret", {
              expiresIn: 300,
            });
            req.session.user = result;

            res.json({ auth: true, token: token, result: result });
          } else {
            res.json({ auth: false, message: "wrong username/password" });
          }
        });
      } else {
        res.json({ auth: false, message: "noo userr exists" });
      }
    }
  );
});
*/
app.listen(8000, () => {
  console.log("SERVER UP RUNNING IN HTTP://LOCALHOST:8000");
});
