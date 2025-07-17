import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Input, Logo } from "components"; // Update the path as needed
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "store";
import { type RootState } from "store";

export const UserProfile = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.game.stats);
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
        <div className="flex flex-row justify-between items-center w-full mb-8">
          <div>
            <Logo />
          </div>
          <div>
            <Button onClick={handleStartGame}>
              <Icon icon={["fas", "arrow-left"]} size="sm" /> Back
            </Button>
          </div>
        </div>
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
              {userName === tempName ? (
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Icon icon={["fas", "check"]} size="sm" />
                </div>
              ) : (
                <Button size="sm" onClick={handleSave}>
                  Save
                </Button>
              )}
            </fieldset>
          </div>
          <hr className="my-10" />
          <h2 className="text-base md:text-2xl font-bold mb-4">Stats</h2>
          <table className="table w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Matches
                </th>
                <th scope="col" className="px-6 py-3">
                  Mistakes
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Result
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.length > 0 ? (
                stats.map((stat) => (
                  <tr key={stat.id} className="border-b border-gray-200">
                    <td className="px-6 py-3">{stat.matches}</td>
                    <td className="px-6 py-3">{stat.mistakes}</td>
                    <td className="px-6 py-3">{stat.duration}</td>
                    <td className="px-6 py-3">{stat.won ? "🏆" : "😥"}</td>
                    <td className="px-6 py-3">
                      {new Date(stat.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 pt-20 pb-4 text-center">
                    <p className="text-6xl">🫣</p>
                    <p className="text-xl mb-4">No game stats available!</p>
                    <Button onClick={handleStartGame} className="mx-auto">
                      Start Game
                    </Button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
