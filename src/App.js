import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
