import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" id="home" >
      <NavBar/>
      <Banner/>
      <Projects/>
    </div>
  );
}

export default App;
