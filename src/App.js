import { Routes, Route } from "react-router-dom";

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
          <Route index element={<HomePage title="Rick and Morty Wiki" />} />
          <Route
            path="/characters"
            element={<CharactersPage title="Characters" />}
          />
          <Route
            path="/locations"
            element={<LocationsPage title="Locations" />}
          />
          <Route path="/episodes" element={<EpisodesPage title="Episodes" />}/>
          <Route
            path="/:id"
            element={<CharacterPage title="Character Information" />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
