// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const setTabs = createAction("HANDLE_TABS");

// // const initialState = { active: 1, content: "" };

// const tabsReducer = createReducer(
//   [],
//   //   initialState.content,
//   (builder) => {
//     builder.addCase(setTabs, (state, action) => {
//       state.push(action.payload);
//     });
//   }
// );

// const setlLogin = createAction("CREATE_SESSION");
// const loginReducer = createReducer({status:false}, (builder) => {
//   builder.addCase(setlLogin, (state, action) => {
//     state.status = !state.status
//   });
// });

// // store
// const store = configureStore({
//   reducer: {
//     active: tabsReducer,
//     login: loginReducer,
//   },
// });

// console.log("on create store : ", store.getState());

// // subscribe
// store.subscribe(() => {
//   console.log("store change : ", store.getState());
// });

// // disspatch
// const action1 = setTabs(1);

// store.dispatch(action1);
// store.dispatch(setlLogin())
