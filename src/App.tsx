import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GamesSection } from './components/GamesSection';
import { Studio } from './components/Studio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <GamesSection />
        <Studio />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
