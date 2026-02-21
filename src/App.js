import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InfoAboutTown from "./components/Info_about_town";
import FamousSight from "./components/The_most_famous_sight";
import OtherSights from "./components/Other_sights";
import TownPhotos from "./components/Town_photos";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <a href="/">Місто</a> |{" "}
        <a href="/famous">Головна памʼятка</a> |{" "}
        <a href="/other">Інші памʼятки</a> |{" "}
        <a href="/photos">Фото</a>
      </nav>

      <Routes>
        <Route path="/" element={<InfoAboutTown />} />
        <Route path="/famous" element={<FamousSight />} />
        <Route path="/other" element={<OtherSights />} />
        <Route path="/photos" element={<TownPhotos />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
