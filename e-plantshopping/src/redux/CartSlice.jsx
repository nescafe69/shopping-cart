import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /* ================= ADD ITEM ================= */
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalAmount += newItem.price;
    },

    /* ================= REMOVE ITEM ================= */
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;

      state.items = state.items.filter((item) => item.id !== id);
    },

    /* ================= UPDATE QUANTITY ================= */
    updateQuantity(state, action) {
      const { id, type } = action.payload; // type: "increase" | "decrease"
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      if (type === "increase") {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.totalAmount += existingItem.price;
      }

      if (type === "decrease" && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
