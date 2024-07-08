import './App.css';
import Add from './components/Add';
import Auth from './components/Auth';
import Cards from './components/Cards';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import Navbar from './components/Navbar';
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Auth />
      <Cards />
      <Add />
      <Testimonial />
      {window.innerWidth > 750 ? <Footer /> : <MobileFooter />}
    </>
  );
}

export default App;
