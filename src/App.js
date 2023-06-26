import './App.css';
import { Header, Services, About, Qualities, Features, Portfolio, Testimonials, Contact, Footer } from './components'; 
import './assets/js/script'

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Qualities />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
