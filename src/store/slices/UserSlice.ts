import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  score: number;
  userProfileIsOpen: boolean;
}

const initialState: UserState = {
  name: "",
  score: 0,
  userProfileIsOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    toggleUserProfileModal: (state) => {
      state.userProfileIsOpen = !state.userProfileIsOpen;
    },
    closeUserProfileModal: (state) => {
      state.userProfileIsOpen = false;
    },
  },
});

export const {
  setUserName,
  updateScore,
  toggleUserProfileModal,
  closeUserProfileModal,
} = userSlice.actions;
export default userSlice.reducer;
export type { UserState };
