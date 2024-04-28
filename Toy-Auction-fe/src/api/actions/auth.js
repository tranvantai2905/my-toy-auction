import instance from "../instance";

async function postLoginApi(payload) {
  try {
    const response = await instance.post("/auth/signin", payload);
    return response.data;
  } catch (error) {
    console.error("Error posting signin:", error);
    throw error; // Re-throw the error for proper handling
  }
}

export { postLoginApi };
