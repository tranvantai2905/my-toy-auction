import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../../context";

const Navbar = () => {
  const data = useAuthState();
  const id = data.user._id;
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Phân loại <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/user">Cá Nhân</Link>
              </li>
              <li>
                <Link to="/info">Thông tin thị trường</Link>
              </li>
              <li>
                <Link to="/policy">Chính sách</Link>
              </li>
              <li>
                <Link to="/contact">Kết nối</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
