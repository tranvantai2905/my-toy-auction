const { Auction } = require("../models/auction.model");

const isAuctionActive = async (req, res, next) => {
  const auctionId = req.params.auctionId; // Extract auction ID from URL params
  console.log({ auctionId });
  try {
    const auction = await Auction.findById(auctionId);
    console.log({ auction });
    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    }

    const currentTime = new Date();
    if (
      currentTime < auction.saleAndApplicationTime.from ||
      currentTime > auction.depositTime.to
    ) {
      return res
        .status(403)
        .json({ message: "Auction is not currently active" });
    }

    next(); // Proceed to the controller if the auction is active
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const auctionMiddle = {
  isAuctionActive,
};

module.exports = auctionMiddle;
