import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div className="App">


      <NavBar />

      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
