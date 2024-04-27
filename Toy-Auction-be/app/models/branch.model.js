const mongoose = require("mongoose");

const BranchSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product", // Reference the Product model
    },
  },
  {
    timestamps: true,
  }
);

const Branch = mongoose.model("Branch", BranchSchema);

module.exports = Branch;
