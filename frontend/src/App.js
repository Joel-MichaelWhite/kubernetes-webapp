import logo from './logo.svg'
import './App.css';
import Navbar from './components/navbar'
import HompageBodyText from './components/homepageBodyText'
import Hero from './components/hero'
import HompageGallery from './components/homepageGallery'
import Footer from './components/footer'
import SectionGap from './components/sectionGap'
function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar></Navbar>
      <Hero></Hero>
      <HompageBodyText></HompageBodyText>
      <HompageGallery></HompageGallery>
      <SectionGap></SectionGap>
      <Footer></Footer>
    </div>
  );
}

export default App;
