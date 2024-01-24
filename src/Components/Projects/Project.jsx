import { RevealX, SectionTitle } from "../GlobalComponent/GlobalComponent";
import '../Projects/Project.css';
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
        <div
          key={i}
          className="Container--card">
          <img src={e.url} alt="image" className="card--image" />
          <h2 id="project--title">{e.title}</h2>
          <p id="description">{e.description}</p>
          <div className="card--bottom">
            <button 
            className="btn"
            onClick={()=>{location.href = e.deploy}}
            >Live</button>
            <button
            className="btn"
            onClick={()=>{location.href = e.source}}
            >Code</button>
          </div>
        </div>

      );
    })

  );
}
export default Projects;