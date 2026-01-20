import Hero from './Hero';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
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
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
