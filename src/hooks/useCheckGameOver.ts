import { useSelector, useDispatch } from "react-redux";
import { type RootState, gameOver, toggleGameOverModal } from "store";
import { useEffect } from "react";
import { playSound } from "utils";

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
