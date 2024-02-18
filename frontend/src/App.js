import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Homepage from './pages/Homepage';
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Homepage } exact/>
        <Route path="/ChatPage" component={ChatPage} />
      </div>
    </Router>
  );
}

export default App;
