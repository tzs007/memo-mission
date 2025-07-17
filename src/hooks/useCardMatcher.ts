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

/**
 * Custom hook that handles the logic for matching two flipped cards in a memory game.
 *
 * When exactly two cards are flipped, this hook checks if they match:
 * - If the cards match (i.e., have the same image), it plays a success sound,
 *   marks the cards as matched, and updates the match count.
 * - If the cards do not match, it waits for 1 second, then unflips the cards
 *   and updates the mistake count.
 *
 * Dependencies:
 * - Uses Redux dispatch to update the game state.
 * - Relies on a custom hook `useFlippedCards` to get the currently flipped cards.
 *
 * Side Effects:
 * - Plays audio feedback on a successful match.
 * - Uses a timeout to delay unflipping cards on a mismatch.
 *
 * @returns void
 */
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
