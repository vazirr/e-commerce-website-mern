const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    price: {
      type: Number,
    },
    salePrice: {
      type: Number,
    },
    totalStock: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
