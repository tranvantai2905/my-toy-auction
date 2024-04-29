import React from "react";
import { useAuthDispatch, useAuthState, logout } from "../../context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Head = () => {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context

  const history = useHistory();

  const handleLogout = () => {
    logout(dispatch); //call the logout action

    history.push("/login"); //navigate to logout page on logout
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +88012 3456 7894</label>
            <i className="fa fa-envelope"></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className="right row RText flex justify-end items-center">
            <label>Câu hỏi Thường gặp</label>
            <label>Cần Giúp Đỡ?</label>
            {/* <span>🏳️‍⚧️</span> */}
            <label>VN</label>
            {/* <span>🏳️</span> */}
            <label>VND</label>
            {userDetails.user ? (
              <div className="flex items-center">
                <p className="text-sm">{userDetails.user.username}</p>
                <button
                  className="text-sm hover:underline"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="text-sm hover:underline"
                  onClick={handleLogin}
                >
                  Đăng nhập
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
