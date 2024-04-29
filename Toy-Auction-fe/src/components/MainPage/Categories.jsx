import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Điện tử",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Xe hơi",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Quà tặng",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Sức khỏe & Làm đẹp",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Đồ chơi cho bé",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
