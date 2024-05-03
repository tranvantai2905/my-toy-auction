import React from "react";
import Categories from "./Categories";
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <>
      <section style={{"margin-bottom":"10px"}} className="home">
        <div className="container d_flex items-center">
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;
