import React from "react";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import "./style/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <React.Suspense
        fallback={
          <div className="spin-wrapper">
            <div className="spinner"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/react-shop/" element={<Shop />}></Route>
          <Route path="/react-shop/cart" element={<Cart />}></Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
