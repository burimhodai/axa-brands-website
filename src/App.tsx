import { AboutUs } from "./components/AboutUs";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <div className="h-[2500px]">
        <Navbar />
        <Hero />
        <Services />
        <Clients />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
