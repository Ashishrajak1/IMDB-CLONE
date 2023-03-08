import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MovieDetail from "./Components/MovieDetail";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
          <Route path="/movies/:type" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
