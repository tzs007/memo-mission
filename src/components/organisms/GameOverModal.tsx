import { useDispatch, useSelector } from "react-redux";
import { type RootState, resetGame, closeGameOverModal } from "store";
import { Button, Modal } from "components";

export const GameOverModal = () => {
  const dispatch = useDispatch();

  const gameOverIsOpen = useSelector(
    (state: RootState) => state.game.gameOverIsOpen
  );

  const handleCloseGameOverModal = () => {
    dispatch(resetGame());
    dispatch(closeGameOverModal());
  };

  return (
    <Modal isOpen={gameOverIsOpen}>
      <div
        className="bg-white w-[300px] rounded-[35px]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center bg-[#f5f5f5] p-[20px] rounded-t-[35px]">
          <h2 className="text-2xl font-gilroy-black ">Game Over!</h2>
        </header>
        <div className="p-[20px]">
          <p className="mb-1 text-center text-lg">
            🎉 Congratulations! You've matched all the cards!
          </p>
          <p className="mb-5 text-center text-lg">
            Great memory and focus — well played! 👏
          </p>
          <Button className="w-full" onClick={handleCloseGameOverModal}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};
