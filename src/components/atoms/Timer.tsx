import { useSelector } from "react-redux";
import { type RootState } from "store";

export const Timer = () => {
  const elapsedTime = useSelector((state: RootState) => state.game.elapsedTime);

  return (
    <div className="text-[#FF3F56] text-[52px] font-gilroy-black p-4">
      {elapsedTime}
    </div>
  );
};
