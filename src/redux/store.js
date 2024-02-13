import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./slices/tabsSlices";

const store = configureStore({ reducer: { tabs: tabsReducer } });

console.log("on create store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("store change : ", store.getState());
});

export default store;
