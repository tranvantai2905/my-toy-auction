import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Giao hàng toàn cầu",
      decs: "Chúng tôi cung cấp giá cạnh tranh trên hơn 100 triệu sản phẩm trong mọi phạm vi.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Thanh toán an toàn",
      decs: "Chúng tôi cung cấp giá cạnh tranh trên hơn 100 triệu sản phẩm trong mọi phạm vi.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Mua sắm với sự tự tin",
      decs: "Chúng tôi cung cấp giá cạnh tranh trên hơn 100 triệu sản phẩm trong mọi phạm vi.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "Hỗ trợ 24/7",
      decs: "Chúng tôi cung cấp giá cạnh tranh trên hơn 100 triệu sản phẩm trong mọi phạm vi.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <h1 style={{"font-size":"4em"}}>Tại sao nên chọn chúng tôi?</h1>
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
