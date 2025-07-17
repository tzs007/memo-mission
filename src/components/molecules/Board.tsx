import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Confetti from "react-confetti";
import { Card } from "components";
import { type RootState, initCards } from "store";
import { useCardMatcher } from "hooks/useCardMatcher";
import { useCheckGameOver } from "hooks/useCheckGameOver";

export const Board = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.board.cards);
  const gameOver = useSelector((state: RootState) => state.game.gameOverIsOpen);
  const numberOfPairs = useSelector(
    (state: RootState) => state.game.numberOfPairs
  );

  // Initialize cards when the component mounts or numberOfPairs changes
  useEffect(() => {
    dispatch(initCards(numberOfPairs));
  }, [numberOfPairs, dispatch]);

  // Handle card matching logic
  useCardMatcher();

  // Check if the game is over
  useCheckGameOver();

  // Render cards on board
  const renderCards = () => {
    return cards.map((card, index) => (
      <Card key={card.id} card={card} index={index} />
    ));
  };

  return (
    <div
      className="grid gap-5 bg-[#f5f5f5] p-[25px] md:p-[50px] rounded-[25px]
        auto-rows-fr 
        grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-6 
        "
    >
      {renderCards()}
      {gameOver && (
        <Confetti
          key={Date.now()}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </div>
  );
};
