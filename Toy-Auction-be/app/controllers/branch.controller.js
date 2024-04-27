const Branch = require("../models/branch.model"); // Import Branch model
const Product = require("../models/product.model");

const createBranch = async (req, res) => {
  const { name, description, products } = req.body;

  const newBranch = new Branch({
    name,
    description,
    products,
  });

  try {
    await newBranch.save();
    res.status(201).json({ message: "Branch created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating branch." });
  }
};

const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching branches." });
  }
};

const getBranch = async (req, res) => {
  const { id } = req.params;

  try {
    const branch = await Branch.findById(id);

    if (!branch) {
      return res.status(404).json({ message: "Branch not found." });
    }

    res.status(200).json(branch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching branch." });
  }
};

const addProductToBranch = async (req, res) => {
  const { branchId, productId } = req.params;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    product.branch = branchId;

    await product.save();

    const branch = await Branch.findByIdAndUpdate(
      branchId,
      { $push: { products: productId } },
      { new: true }
    );

    if (!branch) {
      return res.status(404).json({ message: "Branch not found." });
    }

    res.status(200).json({ message: "Product added to branch successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product to branch." });
  }
};

module.exports = {
  createBranch,
  getAllBranches,
  getBranch,
  addProductToBranch,
};
