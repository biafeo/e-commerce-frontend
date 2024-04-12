import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
