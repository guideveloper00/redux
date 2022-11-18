import { createSlice } from "@reduxjs/toolkit";
/* if you need help to understand the notes, check the readme file or go to my youtube channel ------- */

const initialState = { value: 0, isEven: true };

/* #3 - Redux toolkit library - here we create our slice, a piece of the store */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: function (state, payload) {
      // if you need to do asynchronous function or side effect dont call the inside the reducers, search for (redux-with-async-functions)
      state.value = state.value + payload.payload;
      state.isEven = state.value % 2 === 0;
      console.log(state);
    },
    decrement: function (state) {
      state.value--;
      state.isEven = state.value % 2 === 0;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
