const { Auction, Bid } = require("../models/auction.model");

async function getAllAuctions(req, res) {
  try {
    const auctions = await Auction.find()
      .populate("product")
      .populate({
        path: "bids",
        populate: { path: "bidder" },
      });
    res.json(auctions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getAuction(req, res) {
  let auction;
  try {
    auction = await Auction.findById(req.params.id)
      .populate("product")
      .populate({
        path: "bids",
        populate: { path: "bidder" },
      });
    if (auction == null) {
      return res.status(404).json({ message: "Cannot find auction" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.json(auction);
}

async function createAuction(req, res) {
  const {
    productId,
    saleAndApplicationTime,
    depositTime,
    propertyInfo,
    auctionDetails,
  } = req.body;

  const auction = new Auction({
    product: productId,
    saleAndApplicationTime: saleAndApplicationTime,
    depositTime: depositTime,
    propertyInfo: propertyInfo,
    auctionDetails: auctionDetails,
    bids: [],
    winnerBid: null,
  });

  try {
    const newAuction = await auction.save();
    res.status(201).json(newAuction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function addBidToAuction(req, res) {
  const auctionId = req.params.auctionId;

  const { bidder, amount } = req.body;

  try {
    const auction = await Auction.findById(auctionId)
      .populate("product")
      .populate({
        path: "bids",
        populate: { path: "bidder" },
      })
      .exec();
    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    }

    // Tạo một đợt đấu giá mới
    const bid = new Bid({
      bidder: bidder,
      amount: amount,
      auction: auctionId,
    });
    await bid.save();

    auction.bids.push(bid);

    await auction.save();
    const resultAuction = await Auction.findById(auctionId)
      .populate("product")
      .populate({
        path: "bids",
        populate: { path: "bidder" },
      })
      .exec();

    res.status(201).json(resultAuction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updateAuction(req, res) {
  const {
    _id,
    saleAndApplicationTime,
    depositTime,
    propertyInfo,
    auctionDetails,
  } = req.body;

  const auction = await Auction.findById(_id)
    .populate("product")
    .populate({
      path: "bids",
      populate: { path: "bidder" },
    })
    .exec();

  if (saleAndApplicationTime) {
    auction.saleAndApplicationTime = saleAndApplicationTime;
  }
  if (depositTime) {
    auction.depositTime = depositTime;
  }
  if (propertyInfo) {
    auction.propertyInfo = propertyInfo;
  }
  if (auctionDetails) {
    auction.auctionDetails = auctionDetails;
  }

  try {
    const updatedAuction = await auction.save();
    res.json(updatedAuction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updateBidInAuction(req, res) {
  const auctionId = req.params.auctionId;
  const bidId = req.params.bidId;

  const { amount } = req.body;

  try {
    const auction = await Auction.findById(auctionId)
      .populate("product")
      .populate({
        path: "bids",
        populate: { path: "bidder" },
      })
      .exec();
    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    }

    const bidToUpdate = auction.bids.id(bidId);
    if (!bidToUpdate) {
      return res.status(404).json({ message: "Bid not found in auction" });
    }

    bidToUpdate.amount = amount;

    // Save the updated auction
    const updatedAuction = await auction.save();

    // Return the updated auction with populated bidder information
    res.json(updatedAuction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteAuction(req, res) {
  const auctionId = req.params.id;
  try {
    const auction = await Auction.findById(auctionId);
    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    }

    await auction.remove();

    res.json({ message: "Deleted Auction" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const checkWinnerCll = async (req, res) => {
  const auctionId = req.params.auctionId;

  try {
    const winnerBid = await checkWinner(auctionId);

    if (winnerBid) {
      res.json(winnerBid);
    } else {
      res.status(500).json({
        message: "Auction not yet finished",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

async function checkWinner(auctionId) {
  const auction = await Auction.findById(auctionId);
  if (!auction) {
    throw new Error(`Auction không tồn tại với ID: ${auctionId}`);
  }

  const currentTime = new Date();
  if (currentTime <= auction.depositTime.to) {
    return null;
  }

  if (!auction.winnerBid) {
    const highestBid = await Bid.find({ auction: auctionId })
      .sort({ amount: -1 })
      .limit(1);
    if (!highestBid.length) {
      return null;
    }

    auction.winnerBid = highestBid[0]._id;
    await auction.save();
  }
  let highestBid = auction.winnerBid;
  const winnerBid = await Bid.findById(highestBid).populate({
    path: "bidder",
    select: "username email",
    populate: { path: "roles" },
  });
  winnerBid.isWin = true;
  await winnerBid.save();

  return winnerBid;
}

module.exports = {
  getAllAuctions,
  createAuction,
  addBidToAuction,
  updateAuction,
  updateBidInAuction,
  deleteAuction,
  getAuction,
  checkWinnerCll,
};
