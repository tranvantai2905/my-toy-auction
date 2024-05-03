import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "../../context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
  const userDetails = useAuthState();
  const history = useHistory();
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  const handleNavigate = () => {
    console.log("handleNavigate");
    if (!userDetails.user) history.push("/login");
    else history.push("/user");
  };

  return (
    <>
      <section className="search flex items-center">
        <div className="container c_flex">
          <div className="logo width ">
            <a href="/home"><img src={logo} alt="" /></a>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Tìm kiếm và nhấn Enter..." />
            <span>Tìm kiếm</span>
          </div>

          <div className="icon f_flex width items-center">
            <button className="cursor-pointer" onClick={() => handleNavigate()}>
              <i className="fa fa-user icon-circle"></i>
            </button>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
