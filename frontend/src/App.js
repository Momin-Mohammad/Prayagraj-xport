import { Container } from '@mui/material';
import './App.css';
import About from './components/about';
import Ingredient from './components/ingredient';
import Navbar from './components/navbar';
import Poster from './components/poster';

function App() {
  return (
    <Container disableGutters maxWidth="xl">
      <Navbar />
      <Poster />
      <About />
      <Ingredient />
    </Container>
  );
}

export default App;
