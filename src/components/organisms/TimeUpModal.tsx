import { useDispatch, useSelector } from "react-redux";
import { type RootState, initCards, resetGame, closeTimeUpModal } from "store";
import { Button, Modal } from "components";

export const TimeUpModal = () => {
  const dispatch = useDispatch();

  const numberOfPairs = useSelector(
    (state: RootState) => state.game.numberOfPairs
  );

  const timeUpOpen = useSelector((state: RootState) => state.game.timeUpOpen);

  const handleCloseTimeUpModal = () => {
    dispatch(initCards(numberOfPairs));
    dispatch(resetGame());
    dispatch(closeTimeUpModal());
  };

  return (
    <Modal isOpen={timeUpOpen}>
      <div
        className="bg-white w-[300px] rounded-[35px]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center bg-[#f5f5f5] p-[20px] rounded-t-[35px]">
          <h2 className="text-2xl font-gilroy-black ">Time is up!</h2>
        </header>
        <div className="p-[20px]">
          <p className="mb-1 text-center text-lg">
            Sorry, your playtime has ended. 😭
          </p>
          <p className="mb-5 text-center text-lg">Please try again!</p>
          <Button className="w-full" onClick={handleCloseTimeUpModal}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};
