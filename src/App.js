import "./App.css";

import { useSelector } from "react-redux";
import CounterApp from "./applications/counterApp/CounterApp";
import LoginApp from "./applications/loginApp/LoginApp";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <div className="App">{isAuthenticated ? <CounterApp /> : <LoginApp />}</div>
  );
}

export default App;
