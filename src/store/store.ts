import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./slices/BoardSlice";
import gameSlice from "./slices/GameSlice";
import userSlice from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    board: boardSlice,
    game: gameSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
