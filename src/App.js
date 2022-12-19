import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home name="Home" /> } />
          <Route path="/about" element={ <About name="About" /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
