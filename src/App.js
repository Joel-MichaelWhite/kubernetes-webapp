import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Hero from './components/hero'
import HompageGallery from './components/homepageGallery'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <br></br> */}
      <HompageGallery></HompageGallery>
    </div>
  );
}

export default App;
