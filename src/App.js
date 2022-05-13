import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CharactersPage from "./pages/Characters/CharactersPage";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
