import "./App.css";
import {
  Game,
  GameSettingsModal,
  GameOverModal,
  UserProfileModal,
  TimeUpModal,
} from "components";

function App() {
  return (
    <main>
      <Game />
      <GameSettingsModal />
      <GameOverModal />
      <TimeUpModal />
      <UserProfileModal />
    </main>
  );
}

export default App;
