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
          <h1 className="text-base font-bold">Brands </h1>
          <h1 className="text-base font-extrabold text-primary-500">Shops </h1>
        </div>
        {branches.map((branch, index) => {
          return (
            <div
              className="box f_flex hover:bg-primary text-primary-600 hover:text-white items-center"
              key={index}
            >
              <img src={branch.img} alt="" className="w-5 h-5" />
              <span className="text-sm font-bold">{branch.name}</span>
            </div>
          );
        })}
        <div className="box box2 hover:bg-primary text-primary-600 hover:text-white">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
