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

module.exports = {
  getUser,
  getAllUsers,
};
