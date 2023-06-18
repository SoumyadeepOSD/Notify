import { SectionTitle } from "../GlobalComponent/GlobalComponent";
import '../Projects/Project.css';

const Projects = () => {
    return (
      <div className="Container--project">
        <SectionTitle title="Projects"/>
        <div className="projects">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    )
  }
  

  const ProjectCard = () => {
    return(
      <div className="Container--card">
        <img src="https://rb.gy/q4ye0" alt="image" className="card--image"/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet eum adipisci!</p>
        <div className="card--bottom">
          <button>Live</button>
          <button>Code</button>
        </div>
      </div>
    );
  }
  export default Projects;