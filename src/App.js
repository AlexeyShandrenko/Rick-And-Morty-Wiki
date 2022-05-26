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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage title={HOME_PAGE_TITLE} />} />
          <Route
            path="/characters"
            element={<CharactersPage title={CHARACTERS_PAGE_TITLE} />}
          />
          <Route
            path="/locations"
            element={<LocationsPage title={LOCATIONS_PAGE_TITLE} />}
          />
          <Route
            path="/episodes"
            element={<EpisodesPage title={EPISODES_PAGE_TITLE} />}
          />
          <Route
            path="/:id"
            element={<CharacterPage title={CHARACTER_PAGE_TITLE} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
