import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Input, Logo } from "components"; // Update the path as needed
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "store";
import { type RootState } from "store";
import { StatsTable } from "components";

export const UserProfile = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.name);
  const [tempName, setTempName] = useState<string | null>(userName);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleStartGame = () => {
    navigate("/game");
  };

  const handleSave = (): void => {
    if (!tempName) {
      alert("Please enter a valid name.");
      return;
    }
    dispatch(setUserName(tempName));
  };

  return (
    <section
      id="user-profile"
      className="container mx-auto pb-[50px] px-[50px] h-screen"
    >
      <div className="flex flex-col justify-start items-center h-full w-full">
        <header className="flex flex-row justify-between items-center w-full py-4">
          <div>
            <Logo />
          </div>
          <div>
            <Button onClick={handleStartGame}>
              <Icon icon={["fas", "arrow-left"]} size="sm" /> Back
            </Button>
          </div>
        </header>
        <div className="mb-8 w-full">
          <h1 className="text-center text-xl md:text-4xl font-bold mb-4">
            User Profile
          </h1>
          <div
            className="flex flex-row justify-between items-center "
            onClick={(e) => e.stopPropagation()}
          >
            <fieldset className="flex justify-between gap-2 items-center w-6/12 max-w-full mx-auto">
              <label className="text-lg">Player Name:</label>
              <Input
                defaultValue={userName}
                type="text"
                className="w-full flex-1"
                onChange={handleNameChange}
              />
              {userName === tempName && tempName !== "" ? (
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Icon icon={["fas", "check"]} size="sm" />
                </div>
              ) : (
                <Button size="sm" onClick={handleSave} disabled={!tempName}>
                  Save
                </Button>
              )}
            </fieldset>
          </div>

          <hr className="my-10" />

          <StatsTable handleStartGame={handleStartGame} />
        </div>
      </div>
    </section>
  );
};
