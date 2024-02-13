// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const tabsActiveSlice = createSlice({
//   name: "tabsActive",
//   initialState: [],
//   reducers: {
//     setTabsActive(state, action) {
//       state.push(action.payload);
//     },
//   },
// });

// // store
// const store = configureStore({
//   reducer: {
//     active: tabsActiveSlice.reducer,
//     //   login: loginReducer,
//   },
// });

// console.log("on create store : ", store.getState());

// // subscribe
// store.subscribe(() => {
//   console.log("store change : ", store.getState());
// });

// store.dispatch(tabsActiveSlice.actions.setTabsActive(1));
