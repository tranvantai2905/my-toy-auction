import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";
import theme from "../../theme";
import { MdArrowOutward } from "react-icons/md";

const primaryColor = theme.primary;
const Shop = ({ auctionItems }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />

          <div className="contentWidth">
            <div className="heading d_flex py-10">
              <div className="heading-left flex flex-col gap-2">
                <p className={`text-primary-500 text-base font-medium`}>
                  Tài sản đấu giá
                </p>
                <p className="font-medium text-3xl">Tài sản sắp được đấu giá</p>
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
            <div className="product-content grid gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              <ShopCart auctionItems={auctionItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
