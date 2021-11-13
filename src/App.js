import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Platform from "./components/Platform";
function App() {
  return (
    <Router>
      <div className="App">
        <Platform />
      </div>
    </Router>
  );
}

export default App;
