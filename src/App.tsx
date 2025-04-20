import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import HowItWorks from "./components/HowItWorks";
import PhoneModel from "./components/PhoneModel";

const App = () => {
  return (
    <main className="bg-black">

      <Hero />
      <Hightlights />
      <PhoneModel />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};
export default App;
