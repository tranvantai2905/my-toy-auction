const { authJwt } = require("../middlewares");

const controller = require("../controllers/product.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/products", controller.getProducts);
  app.get("/api/product/:id", controller.getProduct);

  app.post("/api/product", controller.createProduct);

  // update a product
  app.put("/api/product/:id", controller.updateProduct);

  // delete a product
  app.delete("/api/product/:id", controller.deleteProduct);
};
