import { notify, notifySuccess } from "../../App";
import instance from "../instance";

async function postPaymentMomoApi(payload) {
  try {
    const response = await instance.post("/payment/momo", payload);
    if (response.data.message) {
      notifySuccess(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error("Error postPaymentMomoApi:", error);
    notify(error.message);
  }
}

async function createOrderPaypal(payload) {
  try {
    const response = await instance.post("/payment/paypal/create", payload);
    if (response.data.message) {
      notifySuccess(response.data.message);
    }
    const orderData = response.data;

    if (orderData.id) {
      return orderData.id;
    } else {
      const errorDetail = orderData?.details?.[0];
      const errorMessage = errorDetail
        ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
        : JSON.stringify(orderData);

      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error(error);
    notify(error.message);
  }
}

async function onApprovePaypal(id) {
  try {
    const response = await instance.post(`/payment/paypal/capture/`, { id });
    if (response.data.message) {
      notifySuccess(response.data.message);
    }

    const orderData = await response.json();
    // Three cases to handle:
    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
    //   (2) Other non-recoverable errors -> Show a failure message
    //   (3) Successful transaction -> Show confirmation or thank you message

    const errorDetail = orderData?.details?.[0];
    if (errorDetail) {
      // (2) Other non-recoverable errors -> Show a failure message
      throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
    } else if (!orderData.purchase_units) {
      throw new Error(JSON.stringify(orderData));
    } else {
      // (3) Successful transaction -> Show confirmation or thank you message
      // Or go to another URL:  actions.redirect('thank_you.html');
      console.log(
        "Capture result",
        orderData,
        JSON.stringify(orderData, null, 2)
      );
    }
  } catch (error) {
    console.error(error);
    notify(error.message);
  }
}

export { postPaymentMomoApi, createOrderPaypal, onApprovePaypal };
