import { notify, notifySuccess } from "../../App";
import instance from "../instance";

async function getAuctionsApi() {
  try {
    const response = await instance.get("/auctions/");
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    notify(error.message);
  }
}
async function getAuctionApi(id) {
  try {
    const response = await instance.get(`/auctions/${id}`);
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    notify(error.message);
  }
}

export { getAuctionsApi, getAuctionApi };
