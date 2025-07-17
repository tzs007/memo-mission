import {
  type PayloadAction,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { type RootState } from "store";
import { type CardType } from "types";
import { generateCards } from "utils/game";

interface BoardState {
  cards: CardType[];
}

const initialState: BoardState = {
  cards: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initCards: (state, action: PayloadAction<number>) => {
      state.cards = generateCards(action.payload);
    },
    flipCard: (state, action: PayloadAction<string>) => {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card && !card.isMatched) {
        card.isFlipped = true;
      }
    },
    unflipCards: (state, action: PayloadAction<string[]>) => {
      for (const id of action.payload) {
        const card = state.cards.find((c) => c.id === id);
        if (card && !card.isMatched) {
          card.isFlipped = false;
        }
      }
    },
    markCardsAsMatched: (state, action: PayloadAction<string[]>) => {
      for (const id of action.payload) {
        const card = state.cards.find((c) => c.id === id);
        if (card) {
          card.isMatched = true;
        }
      }
    },
    resetCards: (state) => {
      state.cards = [];
    },
  },
});

const selectCards = (state: RootState) => state.board.cards;

export const selectFlippedCards = createSelector([selectCards], (cards) =>
  cards.filter((c) => c.isFlipped && !c.isMatched)
);

export const useFlippedCards = (): CardType[] => {
  return useSelector(selectFlippedCards);
};

export const {
  initCards,
  flipCard,
  unflipCards,
  markCardsAsMatched,
  resetCards,
} = boardSlice.actions;
export default boardSlice.reducer;
export type { BoardState };
