import './App.css';

import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/NavBar/NavBar';
import VideoLoop from './components/HeroImg/HeroImg';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import FloatingNavbar from './components/FloatingNav/FloatingNav';
import AboutSection from './components/About/About';
import ProjectSection from './components/Projects/Project';
import FreelancingSection from './components/Freelancer/Freelancer';
import OfferSection from './components/Offer/Offer';
import ContactPage from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <VideoLoop/>
      <FloatingNavbar/>
      <ScrollToTop/>
      <AboutSection/>
      <ProjectSection/>
      <div className='backg'>
      <FreelancingSection/>
      <OfferSection/>
      <ContactPage/>
      <Footer/>
      </div>
      

      
    </div>
  );
}

export default App;
