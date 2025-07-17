import { useSelector } from "react-redux";
import { type RootState } from "store";

export const Stats = () => {
  const matches = useSelector((state: RootState) => state.game.matches);
  const mistakes = useSelector((state: RootState) => state.game.mistakes);

  return (
    <div>
      <div className="text-black mb-3 mx-4">{matches} matches</div>
      <hr />
      <div className="text-black mt-3 mx-4">{mistakes} mistakes</div>
    </div>
  );
};
