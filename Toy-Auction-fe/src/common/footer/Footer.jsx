import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2 footer-section">
          <div className="box">
            <h1>Bonik</h1>
            <p>
              Khám phá sự thú vị và hứng thú tại web đấu giá đồ chơi! Với sự đa
              dạng về các sản phẩm đồ chơi phong phú, từ những món quà độc đáo
              đến những chiếc đồ chơi phổ biến, chúng tôi mang đến cho bạn trải
              nghiệm đấu giá độc đáo và thú vị. Khám phá ngay để tìm kiếm những
              khoảnh khắc thú vị cùng với những chiếc đồ chơi yêu thích của bạn!
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box footer-item">
            <h2>Về Chúng Tôi</h2>
            <ul>
              <li>Nghề nghiệp</li>
              <li>Cửa hàng của chúng tôi</li>
              <li>Chăm sóc của chúng tôi</li>
              <li>Điều khoản & Điều kiện</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="box">
            <h2>Chăm sóc khách hàng</h2>
            <ul>
              <li>Trung tâm trợ giúp</li>
              <li>Cách mua hàng</li>
              <li>Theo dõi đơn hàng của bạn</li>
              <li>Mua hàng theo số lượng lớn và doanh nghiệp</li>
              <li>Trả hàng & Hoàn tiền</li>
            </ul>
          </div>
          <div className="box">
            <h2>Liên Hệ</h2>
            <ul>
              <li>62, Nguyễn Văn Trỗi, Gia Lai, Việt Nam</li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Điện thoại: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
