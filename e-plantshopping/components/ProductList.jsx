import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../App.css";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 15,
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 18,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5",
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 12,
        image: "https://images.unsplash.com/photo-1616627453374-1f55e4e5b4c4",
      },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        id: 4,
        name: "Aloe Vera",
        price: 10,
        image: "https://images.unsplash.com/photo-1587334207407-3c08d2a3b74c",
      },
      {
        id: 5,
        name: "ZZ Plant",
        price: 20,
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
      },
      {
        id: 6,
        name: "Pothos",
        price: 14,
        image: "https://images.unsplash.com/photo-1587614382346-4ecae43e68f4",
      },
    ],
  },
  {
    category: "Decorative Plants",
    plants: [
      {
        id: 7,
        name: "Fiddle Leaf Fig",
        price: 30,
        image: "https://images.unsplash.com/photo-1588854337118-1c67f94f3b5f",
      },
      {
        id: 8,
        name: "Monstera",
        price: 25,
        image: "https://images.unsplash.com/photo-1587614203976-365c74645e83",
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Plants Collection
      </h1>

      {plantsArray.map((category, index) => (
        <div key={index} style={{ marginBottom: "50px" }}>
          <h2 style={{ marginBottom: "20px", color: "#2e7d32" }}>
            {category.category}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {category.plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h3 style={{ margin: "10px 0" }}>{plant.name}</h3>
                <p style={{ fontWeight: "bold" }}>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  style={{
                    marginTop: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#66bb6a",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
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
