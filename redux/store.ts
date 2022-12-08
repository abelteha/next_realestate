import { configureStore } from "@reduxjs/toolkit";

import queryReducer from "./slices/querySlice";

export const store = configureStore({
  reducer: {
    query: queryReducer, //the key here is query to access queryReducer. it should be the same as the querySlice name which we gave it "query"
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
