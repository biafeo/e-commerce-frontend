import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div>
        <LoginForm />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
