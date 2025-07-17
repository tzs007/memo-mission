import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Game,
  GameSettingsModal,
  GameOverModal,
  TimeUpModal,
  Home,
  UserProfile,
} from "components";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/settings" element={<UserProfile />} />
        </Routes>
      </Router>

      <GameSettingsModal />
      <GameOverModal />
      <TimeUpModal />
    </main>
  );
}

export default App;
