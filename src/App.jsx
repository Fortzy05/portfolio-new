import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/Nav";
import Homes from "./components/pages/Homes";
import Codes from "./components/pages/Codes";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Homes />} />
          <Route path="codes" element={<Codes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
