import express from "express";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";
import imageModel from "./model/imageModel.js";
const app = express();
app.use(express.json());
app.use(cors());

// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("image"), async (req, res) => {
  const image = req.file.filename;
  try {
    const data = await imageModel.create({ image: image });
    res.status(200).json(data);
  } catch (error) {
    console.log("error: 84", error);
    res.status(400).json(error);
  }
});

mongoose
  .connect(
    "mongodb+srv://sagar:123@testcluster1.wyetava.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "MulterTest" }
  )
  .then(() => {
    console.log("DB connected");
  });

app.listen(1337, () => {
  console.log("Server started");
});
