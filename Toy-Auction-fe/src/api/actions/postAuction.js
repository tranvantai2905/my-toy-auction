import { notify, notifySuccess } from "../../App";
import instance from "../instance";

async function postBid(auctionId, amount, bidder) {
  try {
    const amountNum = Number(amount);
    const response = await instance.post(`/auctions/${auctionId}/bids`, {
      bidder,
      amount: amountNum,
    });
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error posting bid:", error);
    notify(error.message);
  }
}

export { postBid };
