import { CiDollar } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import React from "react";

import formatCurrency from "../../utils/formatMoney";
import checkDate from "../../utils/checkDate";
import { useHistory } from "react-router-dom";

const ShopCart = ({ auctionItems }) => {
  console.log({ auctionItems });
  const history = useHistory();

  const handleViewDetail = (id) => {
    history.push(`/detail/${id}`);
  };
  return (
    <>
      {auctionItems?.map((auctionItem, index) => {
        return (
          <div className="group box">
            <div className="product mtop">
              <div className="img flex justify-center border-b border-black">
                <span className="discount opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  {auctionItem._id}
                </span>
                <img
                  className=" overflow-hidden"
                  src={auctionItem.product?.cover[0]}
                  alt=""
                />
              </div>
              <div className="product-details mt-2">
                <h3 className="md:text-base lg:text-lg h-15 truncate ">
                  {auctionItem.product?.name}
                </h3>
                <div className="price mt-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <CiDollar size={"2rem"} />
                      <div className="flex flex-col">
                        <p className="md:text-xs  font-light opacity-75 ">
                          Giá khởi điểm
                        </p>
                        <p className="md:text-xs lg:text-base font-medium">
                          {formatCurrency(
                            auctionItem.propertyInfo.startingPrice
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CiDollar size={"2rem"} cssClasses="bg-red-300" />
                      <div className="flex flex-col">
                        <p className="md:text-xs  font-light opacity-75">
                          Thời gian đăng kí
                        </p>
                        <p className="md:text-xs lg:text-base font-medium">
                          {checkDate(auctionItem.saleAndApplicationTime.to)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <h4>${shopItems.price}.00 </h4> */}
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                </div>
                <div className="action flex m-2 mt-5 w-full justify-center">
                  <button
                    className="w-10 flex justify-center items-center gap-4"
                    onClick={() => handleViewDetail(auctionItem._id)}
                  >
                    <p className="md:text-xs lg:text-base font-bold">
                      Chi tiết
                    </p>
                    <MdArrowOutward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
