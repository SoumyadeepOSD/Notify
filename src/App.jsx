import '../src/App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import {Header} from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import { CustomButton } from './Components/GlobalComponent/GlobalComponent';

const App = () => {
  return(
    <div className="Container">
      <Header/>
      <Hero/>
      <CustomButton/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;

