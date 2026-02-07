export const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || quantity === undefined || quantity <= 0) {
    return res.status(400).json({
      error: "Invalid request data"
    });
  }

  next();
};
