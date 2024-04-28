import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import PaymentSection from "./PaymentSection";
import { getMyBids } from "../../api/actions/user";

const BidsCart = () => {
  const [bids, setBids] = useState([]);

  const getMyWinnerBids = async () => {
    const res = await getMyBids();
    console.log({ res });
    setBids(res);
  };
  useEffect(() => {
    getMyWinnerBids();
  }, []);
  return (
    <>
      <div>
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <div class="mx-auto max-w-4xl">
            <div class="text-center">
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Bids
              </h1>
            </div>

            <div class="mt-8 border p-2 rounded-md">
              <ul class="space-y-4">
                {bids.map((bid) => (
                  <CartItem bid={bid} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BidsCart;
