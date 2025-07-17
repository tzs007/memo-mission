import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  markCardsAsMatched,
  unflipCards,
  updateMatches,
  updateMistakes,
  useFlippedCards,
} from "store";
import { playSound } from "utils/game";

export const useCardMatcher = () => {
  const dispatch = useDispatch();
  const flipped = useFlippedCards();

  useEffect(() => {
    if (flipped.length !== 2) return;

    const [card1, card2] = flipped;

    if (card1.image === card2.image) {
      playSound("/audio/success.mp3");
      dispatch(markCardsAsMatched([card1.id, card2.id]));
      dispatch(updateMatches());
    } else {
      const timeout = setTimeout(() => {
        dispatch(unflipCards([card1.id, card2.id]));
        dispatch(updateMistakes());
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [flipped, dispatch]);
};
