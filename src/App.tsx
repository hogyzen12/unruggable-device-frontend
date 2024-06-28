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
    </main>
  );
};
export default App;
