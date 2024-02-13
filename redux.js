// import { legacy_createStore } from "redux";

// // reducer
// const tabsReducer = (state = { active: [1], content: "" }, action) => {
//   switch (action.type) {
//     case "HANDLE_TABS":
//       return {
//         ...state,
//         active: [...state.active, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// // store
// const store = legacy_createStore(tabsReducer);

// console.log("on create store : ", store.getState());

// // subscribe
// store.subscribe(() => {
//   console.log("store change : ", store.getState());
// });
// // dispatch
// const action1 = { type: "HANDLE_TABS", payload: 2 };

// store.dispatch(action1);
// const action2 = { type: "HANDLE_TABS", payload: 3 };
// store.dispatch(action2);
