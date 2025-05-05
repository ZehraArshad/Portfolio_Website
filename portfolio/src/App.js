import logo from "./assets/img/logo.svg"
import './App.css';
import  {Banner} from "./components/Banner"
import { NavBar } from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Achievement } from "./components/Achievments";
import { Skills } from "./components/Skills";
import {Projects} from "./components/Projects";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Achievement/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
