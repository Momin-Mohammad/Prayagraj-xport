import { Container } from '@mui/material';
import './App.css';
import About from './components/about';
import Ingredient from './components/ingredient';
import Navbar from './components/navbar';
import Poster from './components/poster';
import poster from "./images/frootiPoster.jpg";
import frootiProducts from "./images/frootiProducts.jpg";

function App() {
  return (
    <Container disableGutters maxWidth="xl">
      <Navbar />
      <Poster image={poster} />
      <About />
      <Ingredient />
      <Poster image={frootiProducts} />
    </Container>
  );
}

export default App;
