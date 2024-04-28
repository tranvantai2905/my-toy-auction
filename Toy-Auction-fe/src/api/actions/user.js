import instance from "../instance";

async function getMyWinnerBids() {
  try {
    const response = await instance.get("/user/myWinnerBids");
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error; // Re-throw the error for proper handling
  }
}

async function postBidPayment(id) {
  try {
    const response = await instance.post(`users/bids/${id}/payment`);
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error; // Re-throw the error for proper handling
  }
}

export { getMyWinnerBids, postBidPayment };
