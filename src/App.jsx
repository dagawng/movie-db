import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import { Container } from "@chakra-ui/react";
import SingleMovie from "./components/SingleMovie";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="1300px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/tv/:id" element={<SingleMovie />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv-show" element={<TVShows />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

// AiOutlinePlayCircle;
