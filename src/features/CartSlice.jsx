import { createSlice } from "@reduxjs/toolkit";

// ... your existing code ...

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // Your existing addToCart reducer
        addToCart(state, action) {
            const existingItem = state.find(item => item.item.id === action.payload.id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.push({ item: action.payload, qty: 1 });
            }
        },

        // Your existing removeFromCart reducer
        removeFromCart(state, action) {
            return state.filter(item => item.item.id !== action.payload);
        },

        // NEW: Increment quantity
        incrementQty(state, action) {
            const existingItem = state.find(item => item.item.id === action.payload);
            if (existingItem) {
                existingItem.qty += 1;
            }
        },

        // NEW: Decrement quantity
        decrementQty(state, action) {
            const existingItem = state.find(item => item.item.id === action.payload);
            if (existingItem && existingItem.qty > 1) {
                existingItem.qty -= 1;
            }
        }
    }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
