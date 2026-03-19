import Hero from './Hero';
import Services from './Services';
import FleetPrograms from './FleetPrograms';
import WhoWeServe from './WhoWeServe';
import About from './About';
import Gallery from './Gallery';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <Hero />
      </header>
      <main>
        <Services />
        <FleetPrograms />
        <WhoWeServe />
        <About />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
