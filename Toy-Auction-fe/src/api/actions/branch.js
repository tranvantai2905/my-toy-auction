import { notify, notifySuccess } from "../../App";
import instance from "../instance";

async function getBranchesApi() {
  try {
    const response = await instance.get("/branches/");
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    notify(error.message);
  }
}

export { getBranchesApi };
