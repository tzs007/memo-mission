import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { GameResult } from "types";

interface GameState {
  matches: number;
  mistakes: number;
  elapsedTime: number;
  defaultTime: number;
  numberOfPairs: number;
  isMatchInProgress: boolean;
  settingsIsOpen: boolean;
  timeUpOpen: boolean;
  gameOverIsOpen: boolean;
  stats: GameResult[];
}

const initialState: GameState = {
  matches: 0,
  mistakes: 0,
  elapsedTime: 60,
  defaultTime: 60,
  numberOfPairs: 12,
  isMatchInProgress: false,
  settingsIsOpen: false,
  timeUpOpen: false,
  gameOverIsOpen: false,
  stats: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.isMatchInProgress = true;
      state.elapsedTime = state.defaultTime;
    },
    gameOver: (state) => {
      state.isMatchInProgress = false;
      state.stats.push({
        id: crypto.randomUUID(),
        matches: state.matches,
        mistakes: state.mistakes,
        duration: state.defaultTime - state.elapsedTime,
        won: state.matches === state.numberOfPairs,
        timestamp: Date.now(),
      });
    },
    resetGame: (state) => {
      state.matches = 0;
      state.mistakes = 0;
      state.elapsedTime =
        state.elapsedTime < state.defaultTime ? state.defaultTime : 60;
      state.isMatchInProgress = false;
    },
    countdownTimer: (state) => {
      state.elapsedTime = state.elapsedTime - 1;
    },
    updateMatches: (state) => {
      state.matches = state.matches + 1;
    },
    updateMistakes: (state) => {
      state.mistakes = state.mistakes + 1;
    },
    toggleSettingsModal: (state) => {
      state.settingsIsOpen = !state.settingsIsOpen;
    },
    closeSettingsModal: (state) => {
      state.settingsIsOpen = false;
    },
    toggleTimeUpModal: (state) => {
      state.timeUpOpen = !state.timeUpOpen;
    },
    closeTimeUpModal: (state) => {
      state.timeUpOpen = false;
    },
    toggleGameOverModal: (state) => {
      state.gameOverIsOpen = !state.gameOverIsOpen;
    },
    closeGameOverModal: (state) => {
      state.gameOverIsOpen = false;
    },

    setTimerDefault: (state, action: PayloadAction<number>) => {
      state.defaultTime = action.payload;
      state.elapsedTime = action.payload;
    },
    setNumberOfPairs: (state, action: PayloadAction<number>) => {
      state.numberOfPairs = action.payload;
    },
    addGameResult: (state, action: PayloadAction<GameResult>) => {
      state.stats.push(action.payload);
    },
    clearHistory: (state) => {
      state.stats = [];
    },
  },
});

export const {
  startGame,
  gameOver,
  resetGame,
  setTimerDefault,
  setNumberOfPairs,
  countdownTimer,
  updateMatches,
  updateMistakes,
  toggleSettingsModal,
  closeSettingsModal,
  toggleTimeUpModal,
  closeTimeUpModal,
  toggleGameOverModal,
  closeGameOverModal,
} = gameSlice.actions;
export default gameSlice.reducer;
export type { GameState };
