import "./css/App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Favorites from "./pages/Fovorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <MovieProvider>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar showNavLinks={false} />
                <Landing />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <main className="main-content">
                  <Home />
                </main>
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <>
                <Navbar />
                <main className="main-content">
                  <Favorites />
                </main>
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <Navbar />
                <MovieDetails />
              </>
            }
          />
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App;
