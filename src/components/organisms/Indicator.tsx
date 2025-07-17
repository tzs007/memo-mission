import { Stats, Timer } from "components";

export const Indicator = () => {
  return (
    <div className="flex flex-row items-center">
      <Timer />
      <div className="bg-[#d5d5d5] w-[1px] h-20" />
      <Stats />
    </div>
  );
};
