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

  const handleQuestions = () => {
    history.push("/questions");
  }

  const handleHome = () => {
    history.push("/home");
  }

  const handleInfo = () => {
    history.push("/info");
  }

  const handlePolicy = () => {
    history.push("/policy");
  }

  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row RText flex justify-start items-center">
          {userDetails.user ? (
              <div className="flex items-center">
                <p className="text-sm">Chào mừng bạn trở lại, {userDetails.user.username}!</p>
              </div>
            ) : (
              <div>
                <p className="text-sm">Hãy <u><a style={{color: "white"}} href="/login">đăng nhập</a></u> để theo dõi các kết quả đấu giá của bạn!</p>
              </div>
            )}
          </div>
          <div className="right row RText flex justify-end items-center">
            <label></label>
            <div>
              <button
                className="text-sm hover:underline"
                onClick={handleHome}
              >
                Trang chủ
              </button>
            </div>
            <div>
              <button
                className="text-sm hover:underline"
                onClick={handlePolicy}
              >
                Về chúng tôi
              </button>
            </div>
            <div>
              <button
                className="text-sm hover:underline"
                onClick={handleInfo}
              >
                Tin tức
              </button>
            </div>
            <div>
              <button
                className="text-sm hover:underline"
                onClick={handleQuestions}
              >
                Hỏi đáp
              </button>
            </div>
            {userDetails.user ? (
                <button
                  className="text-sm hover:underline"
                  style={{color: "white",
                    "background-color": "#E94560",
                    "border-radius": "20px",
                    padding: "1px 20px",
                    border: "none",
                    "box-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
            ) : (
              <div>
                <button
                  className="text-sm hover:underline"
                  style={{color: "white",
                    "background-color": "#E94560",
                    "border-radius": "20px",
                    padding: "1px 20px",
                    border: "none",
                    "box-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}
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
