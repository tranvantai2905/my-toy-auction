import React from "react";
import Cart from "./Cart";
import "./style.css";

const DesiredAunction = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Xe được ưa chuộng</h2>
            </div>
            <div className="heading-right row flex items-center">
              <span>Xem thêm</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default DesiredAunction;
