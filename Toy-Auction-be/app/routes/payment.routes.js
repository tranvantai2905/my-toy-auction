const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/payment.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/payment/momo", controller.moMoPayment);
  app.post("/api/payment/paypal/create", controller.createOrderPaypal)
  app.post("/api/payment/paypal/capture", controller.captureOrderPaypal)
};
