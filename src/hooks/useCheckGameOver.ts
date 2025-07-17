import { useSelector, useDispatch } from "react-redux";
import { type RootState, gameOver, toggleGameOverModal } from "store";
import { useEffect } from "react";
import { playSound } from "utils";

/**
 * Custom React hook that checks if the game is over by monitoring the state of the cards.
 * When all cards are matched and the game is active, it plays a win sound,
 * dispatches the `gameOver` action, and toggles the game over modal.
 *
 * @remarks
 * - Uses Redux state to access the cards and game activity status.
 * - Side effects are handled within a `useEffect` hook.
 *
 * @returns {void}
 */
export const useCheckGameOver = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.board.cards);
  const gameActive = useSelector(
    (state: RootState) => state.game.isMatchInProgress
  );

  useEffect(() => {
    if (!gameActive || cards.length === 0) return;

    const allMatched = cards.every((c) => c.isMatched);
    if (allMatched) {
      playSound("/audio/win.mp3");
      dispatch(gameOver());
      dispatch(toggleGameOverModal());
    }
  }, [cards, dispatch, gameActive]);
};
