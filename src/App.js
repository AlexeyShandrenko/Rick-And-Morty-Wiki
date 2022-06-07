import { Routes, Route } from "react-router-dom";

import {
  HOME_PAGE_TITLE,
  CHARACTERS_PAGE_TITLE,
  LOCATIONS_PAGE_TITLE,
  EPISODES_PAGE_TITLE,
  CHARACTER_PAGE_TITLE,
} from "./config/constants/constants";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CharactersPage from "./pages/Characters/CharactersPage";
import CharacterPage from "./pages/Character/CharacterPage";
import LocationsPage from "./pages/Locations/LocationsPage";
import EpisodesPage from "./pages/Episodes/EpisodesPage";

function App() {
  return (
    <div className="App">
      <Routes basename="/rick-and-morty-wiki">
        <Route path="/rick-and-morty-wiki" element={<Layout />}>
          <Route index element={<HomePage title={HOME_PAGE_TITLE} />} />
          <Route
            path="/rick-and-morty-wiki/characters"
            element={<CharactersPage title={CHARACTERS_PAGE_TITLE} />}
          />
          <Route
            path="/rick-and-morty-wiki/locations"
            element={<LocationsPage title={LOCATIONS_PAGE_TITLE} />}
          />
          <Route
            path="/rick-and-morty-wiki/episodes"
            element={<EpisodesPage title={EPISODES_PAGE_TITLE} />}
          />
          <Route
            path="/rick-and-morty-wiki/character/:id"
            element={<CharacterPage title={CHARACTER_PAGE_TITLE} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
