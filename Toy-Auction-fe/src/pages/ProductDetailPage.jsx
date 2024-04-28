import React from "react";
import { Route } from 'react-router-dom';
import DetailProduct from "../components/productDetail/DetailProduct";
import styled from "styled-components";

const ProductContent = styled.div`
  background-color: rgba(244, 244, 244, 1);
  padding: 20px 20px;
  display: flex;
`;

function Detail() {
  return (
    <Route path="/detail" exact>
      <DetailProduct />
    </Route>
  );
}

export default Detail;
