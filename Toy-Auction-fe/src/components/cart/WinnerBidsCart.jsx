import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import PaymentSection from "./PaymentSection";
import { getMyWinnerBids as getMyWinnerBidsApi } from "../../api/actions/user";

const WinnerBidsCart = () => {
  const [bids, setBids] = useState([]);
  const [selectedBids, setSelectedBids] = useState([]);

  const getMyWinnerBids = async () => {
    const res = await getMyWinnerBidsApi();
    console.log({ res });
    setBids(res);
  };
  useEffect(() => {
    getMyWinnerBids();
  }, []);

  const handleChangeSelectedBids = (bid) => {
    setSelectedBids((currentSelectedBids) => {
      const isBidSelected = currentSelectedBids.includes(bid);

      if (isBidSelected) {
        return currentSelectedBids.filter(
          (selectedBid) => selectedBid._id !== bid._id
        );
      } else {
        return [...currentSelectedBids, bid];
      }
    });
  };
  console.log({ selectedBids });
  return (
    <>
      <div>
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <div class="mx-auto max-w-4xl">
            <div class="text-center">
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Những xe đã trúng đấu giá
              </h1>
            </div>

            <div class="mt-8">
              <ul class="space-y-4 border p-2 rounded-md">
                {bids?.map((bid) => (
                  <CartItem
                    bid={bid}
                    handleChangeSelectedBids={handleChangeSelectedBids}
                  />
                ))}
              </ul>

              <PaymentSection selectedBids={selectedBids} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinnerBidsCart;
