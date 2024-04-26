//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart
import { CiDollar } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import React, { useState } from "react";
import formatDate from "../../utils/formatDate";
import formatCurrency from "../../utils/formatMoney";
import checkDate from "../../utils/checkDate";
import { useHistory } from "react-router-dom";

const ShopCart = ({ shopItems, addToCart }) => {
  const history = useHistory();
  console.log({ shopItems });
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const handleViewDetail = (id) => {
    //desperate'
    addToCart(shopItems);

    history.push(`/detail/${id}`);
  };
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className="box">
            <div className="product mtop ">
              <div className="img flex justify-center border-b border-black">
                <span className="discount">{shopItems.discount}% Off</span>
                <img src={shopItems.cover[0]} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details mt-2">
                <h3>{shopItems.name}</h3>
                {/* <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div> */}
                <div className="price mt-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <CiDollar size={"2rem"} />
                      <div className="flex flex-col">
                        <p className="text-xs font-light opacity-75 ">
                          Giá khởi điểm
                        </p>
                        <p className="font-medium">
                          {formatCurrency(shopItems.propertyInfo.startingPrice)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CiDollar size={"2rem"} cssClasses="bg-red-300" />
                      <div className="flex flex-col">
                        <p className="text-xs font-light opacity-75">
                          Thời gian đăng kí
                        </p>
                        <p className="font-medium">
                          {checkDate(shopItems.saleAndApplicationTime.to)}
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
                    onClick={() => handleViewDetail(shopItems.id)}
                  >
                    <p className="text-base font-bold">Chi tiết</p>
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
