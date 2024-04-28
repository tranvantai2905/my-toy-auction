const { authJwt } = require("../middlewares");

const controller = require("../controllers/auction.controller");
const auctionMiddle = require("../middlewares/auctionActive");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/auctions", controller.getAllAuctions);
  app.get("/api/auctions/:id", controller.getAuction);
  app.post("/api/auctions", [authJwt.verifyToken], controller.createAuction);
  app.post(
    "/api/auctions/:auctionId/bids",
    [authJwt.verifyToken, auctionMiddle.isAuctionActive],
    controller.addBidToAuction
  );
  app.post("/api/auctions/:auctionId/checkWinner", controller.checkWinnerCll);
  app.put("/api/auctions/:id", [authJwt.verifyToken], controller.updateAuction);
  app.put(
    "/api/auctions/:auctionId/bids/:bidId",
    [authJwt.verifyToken, auctionMiddle.isAuctionActive],
    controller.updateBidInAuction
  );
  app.delete(
    "/api/auctions/:id",
    [authJwt.verifyToken],
    controller.deleteAuction
  );
};
