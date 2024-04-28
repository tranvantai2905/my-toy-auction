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
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch", // Reference the Branch model
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
