import formatCurrency from "../../utils/formatMoney";
import { FaRegEye } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
const CartItem = ({ bid, handleChangeSelectedBids = () => {} }) => {
  const product = bid?.auction?.product;
  const auction = bid?.auction;

  const [checked, setChecked] = useState(false);

  const handleChangeSelectBox = () => {
    if (!bid.isPayMent) {
      setChecked((checked) => !checked);
      handleChangeSelectedBids(bid);
    }
    // setChecked((checked) => !checked);
    // handleChangeSelectedBids(bid);
  };

  return (
    <div
      className={`flex gap-1 items-center justify-between ${
        bid.isPayMent ? `hidden` : `opacity-100`
      }`}
    >
      <Checkbox
        checked={checked}
        onChange={handleChangeSelectBox}
        inputProps={{ "aria-label": "controlled" }}
        // disabled={bid.isPayMent}
      />
      <li
        class="flex items-center gap-4 hover:shadow-lg hover:shadow-primary-200 transition-all duration-1000 p-2 rounded-xl"
        onClick={handleChangeSelectBox}
      >
        <img
          src={`${product?.cover[0]}`}
          alt=""
          class="size-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">{product?.name}</h3>

          <dl class="mt-0.5 space-y-px text-[14px] text-gray-600 max-w-96">
            <div className="">
              <dt class="inline underline">Miêu tả: </dt>
              <dd class="inline break-words line-clamp-2">
                {product?.description}
              </dd>
            </div>
          </dl>
        </div>

        <div class="flex flex-1 items-center justify-end gap-2">
          <div className="flex flex-col gap-2">
            <div class="flex gap-2 justify-center items-center h-8 w-fit p-2 rounded border-gray-200 bg-gray-50 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
              <FaCoins color="red" />
              <p>Tiền trúng đấu giá: </p>
              <p>{`${formatCurrency(bid?.amount)}`}</p>
            </div>
            <div class="flex gap-2 justify-center items-center h-8 w-fit p-2 rounded border-gray-200 bg-gray-50 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
              <FaCoins color="blue" />
              <p>Phí dịch vụ: </p>
              <p>{`${formatCurrency(
                auction?.propertyInfo?.applicationFee
              )}`}</p>
            </div>
            {bid?.isPayMent && (
              <div class="flex gap-2 justify-center items-center h-8 w-fit p-2 rounded border-gray-200 bg-gray-50 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
                <IoCheckmarkDoneCircleOutline color="green" />
                <p>Đã trả </p>
              </div>
            )}
          </div>
          <Link
            to={`detail/${auction._id}`}
            class="group text-gray-600 transition hover:text-blue-700 flex gap-2 relative"
          >
            <FaRegEye />
            <p className="bg-black text-blue-50 rounded-full text-xs group-hover:opacity-100 opacity-0 absolute top-10 left-[-20px] p-1 w-[150px] transition-opacity duration-1000">
              Xem chi tiết đấu giá
            </p>
          </Link>

          <button class="text-gray-600 transition hover:text-red-600">
            <span class="sr-only">Xóa sản phẩm</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
