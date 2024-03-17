const express = require("express");
const { chats } = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

const app = express();

//.env'yi ayarlamak için şart
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API Başarılı Bir Şekilde Çalışıyor.");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //chat ekranını yakalıyoruz.
  const singleChat = chats.find((c) => c._id === req.params.id); //request'imiz
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Sunucu ${PORT} portunda çalışıyor.`));
