import React from "react";
import Ndata from "./Ndata";
import formatCurrency from "../../utils/formatMoney";

const Cart = () => {
  return (
    <>
      <div className="content grid product">
        {Ndata.map((val, index) => {
          return (
            <div className="box flex flex-col justify-between" key={index}>
              <div className="img">
                <img className="rounded-md" src={val.cover} alt="" />
              </div>
              <h4>{val.name}</h4>
              <span>{formatCurrency(val.price)}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
