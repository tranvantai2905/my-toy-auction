import instance from "../instance";

async function getAuctionsApi() {
  try {
    const response = await instance.get("/auctions/");
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error; // Re-throw the error for proper handling
  }
}

export { getAuctionsApi };
