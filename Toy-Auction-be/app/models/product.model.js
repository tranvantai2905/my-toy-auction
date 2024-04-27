const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    // Ảnh đại diện
    cover: {
      type: [String],
      required: true,
    },

    // Tên sản phẩm
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Mô tả sản phẩm
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
