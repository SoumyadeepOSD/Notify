import { RevealX, SectionTitle } from "../GlobalComponent/GlobalComponent";
import '../Projects/Project.css';
import { motion } from "framer-motion";
import { projectData } from "../../../public/data";


const Projects = () => {
  return (
    <RevealX>
      <div className="Container--project" id="project">
        <SectionTitle title="Projects" />
        <div className="projects">
          <ProjectCard />
        </div>
      </div>
    </RevealX>
  )
}


const ProjectCard = () => {
  return (
    projectData.map((e, i) => {
      return (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="Container--card">
          <img src={e.url} alt="image" className="card--image" />
          <h2 id="project--title">{e.title}</h2>
          <p>{e.description}</p>
          <div className="card--bottom">
            <button>Live</button>
            <button>Code</button>
          </div>
        </motion.div>

      );
    })

  );
}
export default Projects;