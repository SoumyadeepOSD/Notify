import { Reveal, SectionTitle } from "../GlobalComponent/GlobalComponent";
import '../Skills/Skill.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3, FaGitAlt, FaReact, FaPython } from "react-icons/fa";
import { SiFlutter, SiRedux, SiJavascript, SiFigma, SiTailwindcss, SiFirebase, SiFlask, SiStreamlit, SiMongodb, SiBootstrap } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


const Skills = () => {
  return (
      <div className="Container--skill" id="skill">
        <SectionTitle title="Skills" />
        <div className="Skills">
          <Reveal><AiFillHtml5 className="icon" /></Reveal>
          <Reveal><FaCss3 className="icon" /></Reveal>
          <Reveal><FaGitAlt className="icon" /></Reveal>
          <Reveal><FaReact className="icon" /></Reveal>
          <Reveal><FaPython className="icon" /></Reveal>
          <Reveal><SiFlutter className="icon" /></Reveal>
          <Reveal><SiRedux className="icon" /></Reveal>
          <Reveal><SiJavascript className="icon" /></Reveal>
          <Reveal><SiFigma className="icon" /></Reveal>
          <Reveal><SiTailwindcss className="icon" /></Reveal>
          <Reveal><SiFirebase className="icon" /></Reveal>
          <Reveal><FaNodeJs className="icon" /></Reveal>
          <Reveal><SiFlask className="icon" /></Reveal>
          <Reveal><SiStreamlit className="icon" /></Reveal>
          <Reveal><SiBootstrap className="icon" /></Reveal>
          <Reveal><SiMongodb className="icon" /></Reveal>
        </div>
      </div>
  )
}

export default Skills;

