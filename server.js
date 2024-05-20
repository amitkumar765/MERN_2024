require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middlewares");

// lets tackle cors
const corsOption = {
  origin:
    "https://664acd8b977ec65359152340--cheerful-paletas-10a971.netlify.app",
  method: "GET, POST, PUT, DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOption));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to world best mern series by thapa technical");
// });

// app.get("/register", (req, res) => {
//   res.status(200).send("Welcome to registration page");
// });

app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
