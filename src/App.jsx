import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <main className="text-5xl uppercase">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="codes" element={<Codes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
