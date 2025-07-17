import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Board } from "components";
import {
  type RootState,
  countdownTimer,
  gameOver,
  toggleTimeUpModal,
} from "store";
import { playSound } from "utils";

export const Game = () => {
  const dispatch = useDispatch();
  const isMatchInProgress = useSelector(
    (state: RootState) => state.game.isMatchInProgress
  );
  const elapsedTime = useSelector((state: RootState) => state.game.elapsedTime);

  useEffect(() => {
    if (!isMatchInProgress) return;

    // game over check
    const interval = setInterval(() => {
      if (elapsedTime <= 0) {
        playSound("/audio/fail.mp3");
        dispatch(gameOver());
        dispatch(toggleTimeUpModal());
        clearInterval(interval);
        return;
      }

      dispatch(countdownTimer());
    }, 1000);

    return () => clearInterval(interval);
  }, [isMatchInProgress, elapsedTime]);

  return (
    <section
      id="memo-mission"
      className="container mx-auto pb-[50px] max-sm:px-[50px]"
    >
      <div className="w-full">
        <Header />
        <Board />
      </div>
    </section>
  );
};
