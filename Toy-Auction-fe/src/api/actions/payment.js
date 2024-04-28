import instance from "../instance";

async function postPaymentMomoApi(payload) {
  try {
    const response = await instance.post("/payment/momo", payload);

    return response.data;
  } catch (error) {
    console.error("Error postPaymentMomoApi:", error);
    throw error; // Re-throw the error for proper handling
  }
}

export { postPaymentMomoApi };
