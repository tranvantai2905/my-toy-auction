import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";
import { Link } from "react-router-dom";
import Data from "../Data";
import Ndata from "../newarrivals/Ndata";
const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Ndata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <a href={`/detail/${value.id}`}>
                    <img
                      className="h-40"
                      src={value.cover}
                      alt=""
                      width="100%"
                    />
                  </a>
                </div>
                <h4 className="h-30 truncate">{value.name}</h4>
                <span>{value.price}</span>
                <div className="div-product-button-other">
                  <Link
                    to={`/detail/${value.id}`}
                    className="product-button-other"
                  >
                    <div className="product-button-other_title">Chi tiết</div>
                    <div className="product-button-other_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        class="bi bi-arrow-up-right-square"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
