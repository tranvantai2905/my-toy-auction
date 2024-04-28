const { authJwt } = require("../middlewares");

const controller = require("../controllers/branch.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/branches", controller.getAllBranches);
  app.get("/api/branch/:id", controller.getBranch);

  app.post("/api/branch", controller.createBranch);

  app.put(
    "/branches/:branchId/products/:productId",
    controller.addProductToBranch
  );
  // update a product
  // app.put("/api/branch/:id", controller.updateProduct);

  // delete a product
  // app.delete("/api/branch/:id", controller.deleteProduct);
};
