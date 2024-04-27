import React, { useEffect, useState } from "react";
import { getBranchesApi } from "../../api/actions/branch";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ];
  const [branches, setBranches] = useState([]);
  const getBranches = async () => {
    const res = await getBranchesApi();
    setBranches(res);
  };
  useEffect(() => {
    getBranches();
  }, []);
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {branches.map((branch, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={branch.img} alt="" />
              <span>{branch.name}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
