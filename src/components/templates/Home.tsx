import { useNavigate } from "react-router-dom";
import { Button, Logo } from "components"; // Update the path as needed

export const Home = () => {
  let navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <section id="home" className="container mx-auto p-[50px] h-screen">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="w-40 mb-8">
          <Logo />
        </div>
        <div className="mb-8 max-w-full">
          <h1 className="text-center text-xl md:text-4xl font-bold mb-4">
            Welcome to Memo Mission!
          </h1>

          <p className="text-center text-base md:text-2xl font-bold mb-4">
            Challenge your memory and reflexes in a game that's easy to learn
            but hard to master.
          </p>

          <p className="text-center text-base md:text-2xl font-bold mb-4">
            Perfect for a quick brain break or an all-out score chase.
          </p>

          <p className="text-center text-base md:text-2xl font-bold">
            Ready to flip and find the match?
          </p>
        </div>
        <div>
          <Button onClick={handleStartGame}>Start Game</Button>
        </div>
      </div>
    </section>
  );
};
