const { Bid } = require("../models/auction.model");
const User = require("../models/user.model");

// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//   res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.moderatorBoard = (req, res) => {
//   res.status(200).send("Moderator Content.");
// };

async function getUser(req, res) {
  const userId = req.params.id;
  try {
    // Tìm người dùng trong cơ sở dữ liệu
    const user = await User.findById(userId).populate("roles");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
async function getAllUsers(req, res) {
  try {
    // Lấy tất cả người dùng từ cơ sở dữ liệu
    const users = await User.find().populate("roles");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
async function getBidsByUser(req, res) {
  try {
    const userId = req.params.id;

    const bids = await Bid.find({ bidder: userId }).populate({
      path: "auction",
      populate: {
        path: "product",
      },
    });
    console.log({ userId });
    if (!bids.length) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy bid nào cho người dùng này" });
    }
    return res.json(bids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getMyBids = async (req, res) => {
  const userId = req.userId;
  console.log({ userId });
  try {
    const userId = req.userId;
    console.log({ userId });

    const bids = await Bid.find({ bidder: userId }).populate({
      path: "auction",
      populate: {
        path: "product",
      },
    });
    if (!bids.length) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy bid nào cho người dùng này" });
    }
    return res.json(bids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMyWinnerBids = async (req, res) => {
  const userId = req.userId;

  try {
    const bids = await Bid.find({
      bidder: userId,
      isWin: true,
    }).populate({
      path: "auction",
      populate: {
        path: "product",
      },
    });

    if (!bids.length) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy bid thắng nào cho người dùng này" });
    }

    return res.json(bids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postBidPayment = async (req, res) => {
  const userId = req.userId;
  const bidId = req.params.bidId;

  try {
    const bid = await Bid.findOne({
      bidder: userId,
      isWin: true,
      id: bidId,
    }).populate({
      path: "auction",
      populate: {
        path: "product",
      },
    });

    if (!bid) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy bid thắng nào cho người dùng này" });
    }
    bid.isPayMent = true;
    bid.save();

    return res.json({ message: `Bid: ${bid.id} đã được thanh toán` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUser,
  getAllUsers,
  getBidsByUser,
  getMyBids,
  getMyWinnerBids,
  postBidPayment,
};
