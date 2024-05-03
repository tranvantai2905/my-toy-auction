import { notify, notifySuccess } from "../../App";
import instance from "../instance";

async function postLoginApi(payload) {
  try {
    const response = await instance.post("/auth/signin", payload);
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error posting signin:", error);
    notify(error.message);
  }
}

export { postLoginApi };
