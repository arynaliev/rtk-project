import "./App.css";

import { useSelector } from "react-redux";
// import CounterApp from "./applications/counterApp/CounterApp";
import LoginApp from "./applications/loginApp/LoginApp";
import TodoApp from "./applications/todoApp/TodoApp";
import { Container } from "@mui/material";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user.userInfo);
  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="App">{isAuthenticated ? <TodoApp /> : <LoginApp />}</div>
      {/* <TodoApp /> */}
    </Container>
  );
}

export default App;
