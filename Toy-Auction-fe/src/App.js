import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/home/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
// import Sdata from "./components/shops/Sdata";
import NewSdata from "./components/shops/NewSdata";
import { AuthProvider } from "./context";
import AppRoute from "./components/approuter/AppRoute";
import Login from "./pages/login/Login";
import CartPage from "./pages/cart/CartPage";
import PaymentResult from "./pages/paymentResult/PaymentResult";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import Policy from "./pages/policy/Policy";
import InfoPage from "./pages/info/InfoPage";
import Detail from "./pages/ProductDetailPage";
import QuestionsPage from "./pages/questions/QuestionsPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (info) => {
  toast.warn(`${info}`, {
    position: "bottom-left",
  });
};
export const notifySuccess = (info) => {
  toast.success(`${info}`, {
    position: "bottom-left",
  });
};
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            {/* Public route */}
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/policy" exact>
              <Policy />
            </Route>
            <Route path="/info" exact>
              <InfoPage />
            </Route>
            <Route path="/questions" exact>
              <QuestionsPage />
            </Route>
            <Route path="/detail/:id" exact>
              <Detail />
            </Route>
            {/* Private route*/}
            <AppRoute path={"/home"} component={Pages} />
            <AppRoute path={"/cart"} component={CartPage} isPrivate={true} />
            <AppRoute
              path={"/payment-result"}
              component={PaymentResult}
              isPrivate={true}
            />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
      <ToastContainer draggable="mouse" />
    </>
  );
}

export default App;
