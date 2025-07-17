import { IconButton } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  type RootState,
  toggleSettingsModal,
  resetGame,
  startGame,
  initCards,
} from "store";

export const Toolbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state: RootState) => state.user.name);

  const isMatchInProgress = useSelector(
    (state: RootState) => state.game.isMatchInProgress
  );

  const numberOfPairs = useSelector(
    (state: RootState) => state.game.numberOfPairs
  );

  const handleSettingsModalState = () => {
    dispatch(toggleSettingsModal());
  };

  const handleUserProfileModalState = () => {
    navigate("/settings");
  };

  const handleResetGame = () => {
    dispatch(initCards(numberOfPairs));
    dispatch(resetGame());
  };

  const handleStartGame = () => {
    dispatch(initCards(numberOfPairs));
    dispatch(startGame());
  };

  return (
    <div className="flex flex-col items-end gap-3">
      <div className="flex flex-row sm:gap-1 md:gap-3">
        <IconButton iconName="cog" onClick={handleSettingsModalState} />
        <div className="flex flex-1 bg-[#d5d5d5] w-[1px]" />
        <div className="w-9 text-center">
          {isMatchInProgress ? (
            <IconButton iconName="repeat" onClick={handleResetGame} />
          ) : (
            <IconButton iconName="play" onClick={handleStartGame} />
          )}
        </div>
        <div className="flex flex-1 bg-[#d5d5d5] w-[1px]" />
        <IconButton
          iconName="user"
          onClick={handleUserProfileModalState}
          className="!pr-0"
        />
      </div>
      {userName && (
        <div>
          <p>Hello {userName}!</p>
        </div>
      )}
    </div>
  );
};
