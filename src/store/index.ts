import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import gameSlice from "./slices/GameSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
