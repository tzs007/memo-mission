import { useSelector } from "react-redux";
import { type RootState } from "store";
import { Button } from "components";

interface StatsTableProps {
  handleStartGame: () => void;
}

export const StatsTable = ({ handleStartGame }: StatsTableProps) => {
  const stats = useSelector((state: RootState) => state.game.stats);

  return (
    <div>
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
  );
};
