import logo from './logo.svg'
import './App.css';
import Navbar from './components/navbar'
import HompageBodyText from './components/homepageBodyText'
import Hero from './components/hero'
import HompageGallery from './components/homepageGallery'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <HompageBodyText></HompageBodyText>
      <HompageGallery></HompageGallery>
    </div>
  );
}

export default App;
