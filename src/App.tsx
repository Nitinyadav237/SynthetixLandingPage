import Navbar from "./components/Navbar";
import EcoSytemSection from "./section/EcoSytemSection";
import FooterSection from "./section/FooterSection";
import HeroSection from "./section/HeroSection";
import InfoSection from "./section/InfoSection";

const App = () => {
  return (
    <div className="px-5 font-Arimo md:px-20">
      <Navbar />
      <HeroSection />
      <EcoSytemSection />
      <InfoSection />
      <FooterSection />
    </div>
  );
};

export default App;
