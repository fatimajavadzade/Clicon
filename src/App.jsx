import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Products/Product";
import Basket from "./components/Basket/Basket";
import Error404 from "./components/Error/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
