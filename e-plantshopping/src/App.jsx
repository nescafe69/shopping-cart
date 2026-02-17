import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Router>
      {/* ================= NAVIGATION BAR ================= */}
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo">🌿 Paradise Nursery</h2>
        </div>

        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">Cart ({totalQuantity})</Link>
        </div>
      </nav>

      {/* ================= ROUTES ================= */}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
