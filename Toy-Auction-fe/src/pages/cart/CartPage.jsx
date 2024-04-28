/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import CartTab from "../../components/cart/CartTab";
import WinnerBidsCart from "../../components/cart/WinnerBidsCart";
import BidsCart from "../../components/cart/BidsCart";

const CartPage = () => {
  const [state, setState] = useState(1);
  const handleChangeTab = (val) => {
    setState(val);
  };
  return (
    <>
      <div className="mt-10 flex justify-center">
        <CartTab state={state} handleChangeTab={handleChangeTab} />
      </div>
      {state === 0 && <BidsCart />}
      {state === 1 && <WinnerBidsCart />}
    </>
  );
};

export default CartPage;
