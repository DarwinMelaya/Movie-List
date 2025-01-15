import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Fovorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
