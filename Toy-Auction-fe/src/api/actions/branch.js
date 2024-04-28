import instance from "../instance";

async function getBranchesApi() {
  try {
    const response = await instance.get("/branches/");
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error; // Re-throw the error for proper handling
  }
}

export { getBranchesApi };
