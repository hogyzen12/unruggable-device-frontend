import Features from "./components/Features";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import Navbar from "./components/Navbar";
import PhoneModel from "./components/PhoneModel";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <PhoneModel />
      <Features />
    </main>
  );
};
export default App;
