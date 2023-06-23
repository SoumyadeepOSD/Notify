import { Reveal, SectionTitle } from "../GlobalComponent/GlobalComponent";
import '../Skills/Skill.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3, FaGitAlt, FaReact, FaPython } from "react-icons/fa";
import { SiFlutter, SiRedux, SiJavascript, SiFigma, SiTailwindcss, SiFirebase, SiFlask, SiStreamlit, SiMongodb, SiBootstrap } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


const Skills = () => {
  return (
    <Reveal>
      <div className="Container--skill" id="skill">
        <SectionTitle title="Skills" />
        <div className="Skills">
          <AiFillHtml5 className="icon" />
          <FaCss3 className="icon" />
          <FaGitAlt className="icon" />
          <FaReact className="icon" />
          <FaPython className="icon" />
          <SiFlutter className="icon" />
          <SiRedux className="icon" />
          <SiJavascript className="icon" />
          <SiFigma className="icon" />
          <SiTailwindcss className="icon" />
          <SiFirebase className="icon" />
          <FaNodeJs className="icon" />
          <SiFlask className="icon" />
          <SiStreamlit className="icon" />
          <SiBootstrap className="icon" />
          <SiMongodb className="icon" />
        </div>
      </div>
    </Reveal>
  )
}

export default Skills;

