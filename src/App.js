import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Platform from "./components/Platform";
import ProfileView from "./components/ProfileView.";
function App() {
  return (
    <Router>
      <div className="App flex justify-between">
        <Platform />
        <ProfileView />
      </div>
    </Router>
  );
}

export default App;
