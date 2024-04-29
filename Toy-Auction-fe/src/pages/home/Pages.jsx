import React, { useEffect, useState } from "react";
import Home from "../../components/MainPage/Home";
// import FlashDeals from "../../components/flashDeals/FlashDeals";
// import TopCate from "../../components/top/TopCate";
import NewArrivals from "../../components/newarrivals/NewArrivals";
// import Discount from "../../components/discount/Discount";
import Shop from "../../components/shops/Shop";
// import Annocument from "../../components/annocument/Annocument";
import Wrapper from "../../components/wrapper/Wrapper";
import { getAuctionsApi } from "../../api/actions/auction";

const Pages = () => {
  const [auctions, setAuctions] = useState([]);

  const getAuctions = async () => {
    const res = await getAuctionsApi();

    setAuctions(res);
  };
  useEffect(() => {
    getAuctions();
  }, []);

  return (
    <>
      <Home />
      {/* <FlashDeals productItems={productItems} addToCart={addToCart} /> */}
      {/* <TopCate /> */}
      <NewArrivals />
      {/* <Discount /> */}
      <Shop auctionItems={auctions} />
      {/* <Annocument /> */}
      <Wrapper />
    </>
  );
};

export default Pages;
