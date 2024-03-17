const express = require("express");
const { chats } = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

//.env'yi ayarlamak için şart
dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //JSON verisini kabul etmesi için.

app.get("/", (req, res) => {
  res.send("API Başarılı Bir Şekilde Çalışıyor.");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Sunucu ${PORT} portunda çalışıyor.`));
