import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Platform from "./components/Platform";
import ProfileView from "./components/ProfileView.";
import Chat from "./components/Chat";
function App() {
  return (
    <Router>
      <div className="App flex ">
        <Platform />
        <Chat />
        <ProfileView />
      </div>
    </Router>
  );
}

export default App;
