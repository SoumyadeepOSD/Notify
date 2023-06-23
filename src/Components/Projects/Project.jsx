import { RevealX, SectionTitle } from "../GlobalComponent/GlobalComponent";
import '../Projects/Project.css';
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <RevealX>
      <div className="Container--project" id="project">
        <SectionTitle title="Projects" />
        <div className="projects">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </RevealX>
  )
}


const ProjectCard = () => {
  return (

    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="Container--card">
      <img src="https://rb.gy/q4ye0" alt="image" className="card--image" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet eum adipisci!</p>
      <div className="card--bottom">
        <button>Live</button>
        <button>Code</button>
      </div>
    </motion.div>

  );
}
export default Projects;