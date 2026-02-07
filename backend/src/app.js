import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error"
  });
});

export default app;
