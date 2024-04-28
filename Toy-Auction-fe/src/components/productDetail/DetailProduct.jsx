import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import labeldata from "../labeldata";
import Data from "../Data";
import labeldata from "../../labeldata";
import "./producdetail_2.css";
import Dcard from "../discount/Dcard";
// import "../css/detail.css";
// import Compare from "../components/Compare";
import { ToastContainer, toast } from "react-toastify";
// import { toast } from "react-toastify";

import ImageProductDetail from "./productdetail_re";

function DetailProduct() {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Adding 1 because months are zero-indexed
    const year = date.getFullYear();

    // Pad single-digit day and month with leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  const [style, setStyle] = useState(false);

  const [compare, setCompare] = useState(false);
  const closeCompare = () => {
    setCompare(false);
    setStyle(false);
  };

  const [show, setShow] = useState(true);

  const changeStyle = () => {
    setStyle((current) => !current);
    setCompare((current) => !current);
  };

  const { id } = useParams();

  let product = Data.productItems[0];
  // if (id <= 5) product = Data.productItems[id - 1];
  // else if (id <= 11) product = Data.ecovacs[id - 6];
  // else product = Data.liectroux[id - 12];

  const handleBuy = () => {
    // let cart = localStorage.getItem("cart")
    //   ? JSON.parse(localStorage.getItem("cart"))
    //   : [];
    // if (!cart.find((item) => item.product.name === product.name))
    //   cart = [...cart, { product, num: 1 }];
    // else cart.find((item) => item.product.name === product.name).num++;
    // localStorage.setItem("cart", JSON.stringify(cart));
    // toast("Bạn đã thêm vào giỏ hàng thành công!");
    // window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <ToastContainer />
      <div className="product_detail_above">
        <div className="product_detail_left">
          <div className="name-product">{product.name}</div>
          <div className="center">
            {" "}
            <ImageProductDetail
              mainImage={product.cover[0]}
              otherImages={product.cover}
            ></ImageProductDetail>{" "}
          </div>
        </div>
        <div className="product_detail_right">
          <div className="productdetail_price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box"
              viewBox="0 0 16 16"
              color="cornflowerblue"
            >
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
            </svg>
            <div>
              <div className="productdetail_right_title">Mã tài sản</div>
              <div className="productdetail_right_value">{product.id}</div>
            </div>
          </div>
          <div className="productdetail_price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar-date"
              viewBox="0 0 16 16"
              color="cornflowerblue"
            >
              <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <div>
              <div className="productdetail_right_title">
                Thời gian bắt đầu đấu giá
              </div>
              <div className="productdetail_right_value">
                {formatDate(product.depositTime.from)}
              </div>
            </div>
          </div>
          <div className="productdetail_price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar-date"
              viewBox="0 0 16 16"
              color="cornflowerblue"
            >
              <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <div>
              <div className="productdetail_right_title">
                Thời gian dự kiến kết thúc
              </div>
              <div className="productdetail_right_value">
                {formatDate(product.depositTime.to)}
              </div>
            </div>
          </div>
          <div className="productdetail_price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cash-coin"
              viewBox="0 0 16 16"
              color="cornflowerblue"
            >
              <path
                fill-rule="evenodd"
                d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
              />
              <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
              <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
              <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
            </svg>
            <div>
              <div className="productdetail_right_title">Giá khởi điểm</div>
              <div className="productdetail_right_value">
                {product.propertyInfo.startingPrice
                  .toLocaleString("en-US")
                  .replace(/,/g, ".")}
              </div>
            </div>
          </div>
          <div className="productdetail_price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cash-coin"
              viewBox="0 0 16 16"
              color="cornflowerblue"
            >
              <path
                fill-rule="evenodd"
                d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
              />
              <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
              <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
              <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
            </svg>
            <div>
              <div className="productdetail_right_title">Bước giá</div>
              <div className="productdetail_right_value">
                {product.propertyInfo.bidIncrement
                  .toLocaleString("en-US")
                  .replace(/,/g, ".")}
              </div>
            </div>
          </div>
          <div className="productdetail_price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-tags"
              viewBox="0 0 16 16"
              color="cornflowerblue"
            >
              <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
              <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
            </svg>
            <div>
              <div className="productdetail_right_title">
                Phương thức đấu giá
              </div>
              <div className="productdetail_right_value">
                {product.auctionDetails.method}
              </div>
            </div>
          </div>
          {/* <div className="btn-group">
            <button className="btn-shopping" onClick={handleBuy}>
              <ion-icon name="cart-outline" class="shopping-cart"></ion-icon>Mua
              ngay
            </button>
            {style === true ? (
              ""
            ) : (
              <button onClick={changeStyle} className="btn-compare">
                <ion-icon
                  name="search-outline"
                  class="compare-outline"
                ></ion-icon>
                So sánh
              </button>
            )}
            {style === false ? (
              ""
            ) : (
              <button className="btn-close-outline">
                <ion-icon
                  onClick={closeCompare}
                  name="close"
                  class="close-outline-pop"
                ></ion-icon>
              </button>
            )}
          </div> */}

          {/* <div className="product-describe">
          Thông tin mô tả
          <ul>
            <p>{product.title}</p>
            {product.describe.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div> */}
        </div>
      </div>
      <div className="product_detail_below_main">
        <div className="product_detail_below">
          {/* <div className="product-describe">
          Thông tin mô tả
          <ul>
            <p>{product.title}</p>
            {product.describe.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div> */}
          <div className="productdetail_moreinfo">
            <div className="productdetail_moreinfo_title">Mô tả sản phẩm</div>
            <div className="hide" onClick={() => setShow(!show)}>
              {/* {show === true ? "Ẩn bớt" : "Xem thêm"} */}
            </div>
          </div>

          <div className="produtdetail_below_detail-product">
            <div className="name-product">{product.name}</div>
            <div className="produtdetail_below_detail-product_description">
              {product.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="productdetail_moreinfo">
          <div className="productdetail_moreinfo_title">Thông tin chi tiết</div>
          <div className="hide" onClick={() => setShow(!show)}>
            {show === true ? "Ẩn bớt" : "Xem thêm"}
            {show === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </div>
        </div>
        {show && (
          <div className="detail-product">
            <div className="detail-product-item">
              <div className="field">Hạn bảo hành:</div>
              <div className="desc">12 tháng</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Kích thước:</div>
              <div className="desc">340 x 85 x 340 mm</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Xuất xứ:</div>
              <div className="desc">Trung Quốc</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Dung tích chứa bụi:</div>
              <div className="desc">200 ml</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Khối lượng:</div>
              <div className="desc">3 kg</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Dung lượng pin:</div>
              <div className="desc">3400mAh</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Lực hút:</div>
              <div className="desc">5W (~4200pa)</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Màu sắc:</div>
              <div className="desc">Đen, Xám</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Tính năng:</div>
              <div className="desc">
                Điều khiển qua ứng dụng , Tự động quay về đế sạc , Tự động điều
                chỉnh sức hút
              </div>
            </div>
            <div className="detail-product-item">
              <div className="field">Tiện ích:</div>
              <div className="desc">
                Hộp chứa bụi EZ - dễ dàng vệ sinh với nướcLên lịch làm việc và
                theo dõi thông qua app kết nối với điện thoại thông minh
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="product_detail_otherProduct">
        <div className="product_detail_otherProduct_title">Tài sản khác</div>
        <Dcard></Dcard>
      </div>
    </>
  );
}

export default DetailProduct;
