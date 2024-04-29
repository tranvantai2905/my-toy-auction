import React, { useEffect, useState } from "react";
import { getBranchesApi } from "../../api/actions/branch";

const Catg = () => {
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
          <h1 className="text-base font-bold">Nhãn Hàng </h1>
          <h1 className="text-base font-extrabold text-primary-500">
            Tên shop{" "}
          </h1>
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
          <button>Xem các nhãn hàng</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
