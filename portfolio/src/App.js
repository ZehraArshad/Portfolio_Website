import logo from "./assets/img/logo.svg"
import './App.css';
import  {Banner} from "./components/Banner"
import { NavBar } from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./components/Skills";
import {Projects} from "./components/Projects";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
