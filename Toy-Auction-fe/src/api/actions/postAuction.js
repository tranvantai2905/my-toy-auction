import instance from "../instance";

async function postBid(auctionId, amount, bidder ) {
    try {
        const amountNum = Number(amount);
        const response = await instance.post(`/auctions/${auctionId}/bids`, { bidder, amountNum });
        return response.data;
    } catch (error) {
        console.error("Error posting bid:", error);
        throw error; // Re-throw the error for proper handling
    }
}

export { postBid };