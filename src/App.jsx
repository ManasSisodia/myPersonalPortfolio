import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import SkillList from "./components/SkillList/SkillList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white",color: darkMode && "white"}}>
      <Nav/>
      <Toggle/>
      <Intro/>
      <About/>
      <SkillList/>
      <Contact/>
      </div>
  );  
};

export default App;