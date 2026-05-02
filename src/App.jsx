import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/products" element={<Product />} /> */}
          {/* <Route path="/basket" element={<Basket />} /> */}
        </Route>
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </>
  );
}

export default App;
