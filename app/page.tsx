import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Scheduling from "./components/Scheduling";
import PatientForms from "./components/PatientForms";
import VaccineInfo from "./components/VaccineInfo";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip navigation for keyboard and screen reader users */}
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <Services />
        <Scheduling />
        <PatientForms />
        <VaccineInfo />
        <Reviews />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
