const mongoose = require("mongoose");

const BidSchema = mongoose.Schema({
  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  isWin: {
    type: Boolean,
    default: false,
  },
  isPayMent: {
    type: Boolean,
    default: false,
  },
  auction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auction",
    required: true,
  },
});

const AuctionSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
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
    bids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bid",
      },
    ],
    winnerBid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bid",
    },
  },
  {
    timestamps: true,
  }
);

const Auction = mongoose.model("Auction", AuctionSchema);
const Bid = mongoose.model("Bid", BidSchema);

module.exports = { Auction, Bid };
