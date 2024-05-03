import { notify, notifySuccess } from "../../App";
import instance from "../instance";

async function getMyWinnerBids() {
  try {
    const response = await instance.get("/user/myWinnerBids");
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    notify(error.message);
  }
}
async function getMyBids() {
  try {
    const response = await instance.get("/user/myBids");
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    notify(error.message);
  }
}

async function postBidPayment(id) {
  try {
    const response = await instance.post(`users/bids/${id}/payment`);
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    notify(error.message);
  }
}

export { getMyWinnerBids, postBidPayment, getMyBids };
