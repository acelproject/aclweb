import { createSlice } from "@reduxjs/toolkit";

// const tabsSlice = createSlice({
//   name: "tabs",
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     setTabsActive: (state, action) => {
//       state.data.push(action.payload);
//     },
//   },
// });

const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    data: [1],
  },
  reducers: {
    setTabs: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

// export const { setTabsActive } = tabsSlice.action;
export const { setTabs } = tabsSlice.actions;
export default tabsSlice.reducer;
