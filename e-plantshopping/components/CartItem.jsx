import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import "../App.css";

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, type: "increase" }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, type: "decrease" }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {items.length === 0 && (
        <p>Your cart is currently empty.</p>
      )}

      {items.map((item) => (
        <div className="cart-card" key={item.id}>
          {/* Thumbnail */}
          <img src={item.image} alt={item.name} />

          {/* Details */}
          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total Price: ${item.totalPrice}</p>

            {/* Quantity Controls */}
            <div className="cart-buttons">
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <span style={{ margin: "0 10px" }}>
                {item.quantity}
              </span>
              <button onClick={() => handleIncrease(item.id)}>+</button>
            </div>

            {/* Delete Button */}
            <button
              className="secondary-btn"
              onClick={() => handleRemove(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Total Section */}
      {items.length > 0 && (
        <div className="total-section">
          <h3>Total Amount: ${totalAmount}</h3>

          <Link to="/products">
            <button className="secondary-btn">
              Continue Shopping
            </button>
          </Link>

          <button className="primary-btn">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
