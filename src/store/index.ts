import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
/* if you need help to understand the notes, check the readme file or go to my youtube channel ------- */

/* #1 - Redux toolkit library - here we create and configure our store */
const store = configureStore({
  /* here we can import and pass more than one reducer, example: reducer: { counter, isAuth }, */
  reducer: { counter },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
