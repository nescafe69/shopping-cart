import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "../App.css";

const plantData = [
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic Plants",
    description: "A soothing aromatic plant known for its calming fragrance.",
    price: 12,
    image: "https://via.placeholder.com/200x150?text=Lavender"
  },
  {
    id: 2,
    name: "Mint",
    category: "Aromatic Plants",
    description: "Fresh mint plant perfect for culinary and medicinal use.",
    price: 8,
    image: "https://via.placeholder.com/200x150?text=Mint"
  },
  {
    id: 3,
    name: "Tulsi",
    category: "Medicinal Plants",
    description: "Sacred medicinal herb known for boosting immunity.",
    price: 10,
    image: "https://via.placeholder.com/200x150?text=Tulsi"
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    description: "Natural healing plant used for skincare and health benefits.",
    price: 15,
    image: "https://via.placeholder.com/200x150?text=Aloe+Vera"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plantData.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-section">
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plantData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p><strong>${plant.price}</strong></p>

                  <button
                    className="primary-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
