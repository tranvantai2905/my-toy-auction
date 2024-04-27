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

    // Khung thời gian bán và đăng ký tham gia đấu giá
    saleAndApplicationTime: {
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
    },

    // Khung thời gian đặt cọc
    depositTime: {
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
    },

    // Thông tin chi tiết về tài sản
    propertyInfo: {
      startingPrice: {
        type: Number,
        required: true,
        min: 0,
      },
      applicationFee: {
        type: Number,
        required: true,
        min: 0,
      },
      bidIncrement: {
        type: Number,
        required: true,
        min: 0,
      },
      deposit: {
        type: Number,
        required: true,
        min: 0,
      },
    },

    // Thông tin chi tiết về phiên đấu giá
    auctionDetails: {
      type: {
        type: String,
        required: true,
      },
      method: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
