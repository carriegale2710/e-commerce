import { useState, useEffect, createContex, useContext } from "react";
import { CartProvider } from "./context/CartProvider";
import ProductsProvider from "./context/ProductsProvider"; // Changed to named import

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound from "./pages/NotFound/NotFound";

import "./App.scss";

function App() {
  // const [cart, setCart] = useState(["empty"]);
  // <CartContext.Provider>

  // </CartContext.Provider>
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/products/:productId/:variantId"
                element={<ProductPage />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
