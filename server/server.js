const express = require("express");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductRouter = require("./routes/admin/products-routes");

mongoose
  .connect(
    "mongodb+srv://vaibhavshukla18783:5wxPU5b7ljAsAdUc@nahi-hai-vo.fki8a.mongodb.net/"
  )
  .then(() => console.log("mongodb connected ........"));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductRouter);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
