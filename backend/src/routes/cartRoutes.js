import express from "express";
import { validateCart } from "../middleware/validateCart.js";

const router = express.Router();

router.post("/", validateCart, (req, res) => {
  res.status(200).json({
    message: "Item added to cart"
  });
});

export default router;
