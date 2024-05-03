import { useState } from "react";
import formatCurrency from "../../utils/formatMoney";
import Radio from "@mui/material/Radio";
import {
  createOrderPaypal,
  onApprovePaypal,
  postPaymentMomoApi,
} from "../../api/actions/payment";

/* eslint-disable jsx-a11y/anchor-is-valid */
const PaymentSection = ({ selectedBids }) => {
  const [selectedValue, setSelectedValue] = useState("Memo");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const calculateTotalAmount = (selectedBids) => {
    //return 1 // API payment testing

    const totalAmount = selectedBids.reduce((accumulator, bid) => {
      const applicationFee = bid.auction.propertyInfo.applicationFee;
      return accumulator + bid.amount + applicationFee;
    }, 0);

    return totalAmount;
  };
  const Subtotal = calculateTotalAmount(selectedBids);
  const VAT = (Subtotal * 5) / 100;
  const Total = Subtotal + VAT;
  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  const handlePayment = async () => {
    if (Total === 0) return;
    else if (selectedValue === "Memo") {
      const res = await postPaymentMomoApi({
        bidId: selectedBids.map((bid) => bid._id).join(":"),
        priceGlobal: Total,
      });
      console.log({ res });
      const MomoUrl = res.payUrl;
      openWebsite(MomoUrl);
    } else {
      const payId = await createOrderPaypal({
        bidId: selectedBids.map((bid) => bid._id).join("::"),
        priceGlobal: Total,
      });
      openWebsite(`https://www.sandbox.paypal.com/checkoutnow?token=${payId}`);
      onApprovePaypal(payId);
    }
  };

  return (
    <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
      <div class="w-screen max-w-lg space-y-4 hover:shadow-lg hover:shadow-primary-500 transition-all duration-1000 p-6 rounded-xl  border">
        <dl class="space-y-0.5 text-sm text-gray-700">
          <div class="flex justify-between">
            <dt>Subtotal</dt>
            <dd className=".flip">{formatCurrency(Subtotal)}</dd>
          </div>

          <div class="flex justify-between">
            <dt>VAT</dt>
            <dd>{formatCurrency(VAT)}</dd>
          </div>

          <div class="flex justify-between !text-base font-medium">
            <dt>Total</dt>
            <dd>{formatCurrency(Total)}</dd>
          </div>
        </dl>

        <div class="flex justify-end">
          <span class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ms-1 me-1.5 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>

            <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
          </span>
        </div>

        <div className="flex gap-3 justify-between items-center pt-10 border p-5 rounded-sm bg-slate-100 border-solid">
          <dt className="text-sm">Payment Method</dt>
          <div className="h-20 w-20 relative hover:shadow-lg">
            <Radio
              sx={{
                position: "absolute",
                top: 1,
                left: 1,
              }}
              checked={selectedValue === "Memo"}
              onChange={handleChange}
              value="Memo"
              name="radio-buttons"
              inputProps={{ "aria-label": "Memo" }}
            />
            <img
              className="h-full w-full"
              src="https://img.mservice.io/momo-payment/icon/images/logo512.png"
              alt="Momo"
            />
          </div>
          <div className="h-20 w-40 relative hover:shadow-lg">
            <Radio
              sx={{
                position: "absolute",
                top: 1,
                left: 1,
              }}
              checked={selectedValue === "Paypal"}
              onChange={handleChange}
              value="Paypal"
              name="radio-buttons"
              inputProps={{ "aria-label": "Paypal" }}
            />
            <img
              className="h-full w-full"
              src="https://th.bing.com/th/id/OIP.iPcVDe87mw9ipTIkRCb8FAHaDQ?rs=1&pid=ImgDetMain"
              alt="Paypal"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <a
            href="#"
            class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            onClick={() => handlePayment()}
          >
            Payment
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
