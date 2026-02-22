import "./App.css";
import InfoAboutTown from "./components/Info_about_town";
import FamousSight from "./components/The_most_famous_sight";
import OtherSights from "./components/Other_sights";
import TownPhotos from "./components/Town_photos";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Місто</Link> |{" "}
        <Link to="/famous">Головна памʼятка</Link> |{" "}
        <Link to="/other">Інші памʼятки</Link> |{" "}
        <Link to="/photos">Фото</Link>
      </nav>

      <Routes>
        <Route path="/" element={<InfoAboutTown />} />
        <Route path="/famous" element={<FamousSight />} />
        <Route path="/other" element={<OtherSights />} />
        <Route path="/photos" element={<TownPhotos />} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
