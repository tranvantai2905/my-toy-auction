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
        <div className="d_flex">
          <h1 className="text-base font-bold">Xuất xứ</h1>
          <h1 className="text-base font-bold">Nhãn hàng</h1>
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
      </div>
    </>
  );
};

export default Catg;
