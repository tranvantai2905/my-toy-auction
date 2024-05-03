import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";

import { MdArrowOutward } from "react-icons/md";

const Shop = ({ auctionItems }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />

          <div className="contentWidth">
            <div className="heading d_flex py-10">
              <div className="heading-left flex flex-col gap-2">
                <p className="font-medium text-3xl">Tài sản đang được đấu giá</p>
              </div>
              <div className="heading-right row">
                <button
                  className={`flex justify-center items-center gap-4 bg-primary text-white`}
                >
                  <p className="text-base font-bold">Xem toàn bộ tài sản</p>
                  <MdArrowOutward />
                </button>
              </div>
            </div>
            <div className="product-content grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ShopCart auctionItems={auctionItems} />
            </div>  
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
