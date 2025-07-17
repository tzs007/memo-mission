import { Indicator, Logo, Toolbar } from "components";

export const Header = () => {
  return (
    <header className="grid grid-cols-2 sm:grid-cols-[1fr_auto] grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 py-4 gap-x-3 gap-y-0">
      <div className="col-start-1 row-start-1 flex items-center justify-start  max-lg:justify-end">
        <Logo />
      </div>

      <div className="col-start-2 row-start-1 lg:col-start-3 flex items-center justify-end">
        <Toolbar />
      </div>

      <div className="col-span-2 col-start-1 row-start-2 lg:row-start-1 lg:col-span-1 lg:col-start-2 flex items-center justify-center">
        <Indicator />
      </div>
    </header>
  );
};
