import { Reveal, SectionTitle } from "../GlobalComponent/GlobalComponent";
import PropTypes from 'prop-types';
import '../Experience/Experience.css';
import { data } from "../../../public/data";
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, Bs5Circle } from "react-icons/bs";


const Experience = () => {
  return (
      <div className="Container--project" id="experience">
        <SectionTitle title="Experiences" />
        <div className="Experiences">
          {
            data.map((e, i) => {
              return (
                <Reveal key={e.id || i}>
                <ExperienceCard 
                  id={e.id}
                  Icon={e.Icon}
                  Position={e.Position}
                  Desc={e.Desc}
                  Start={e.Start}
                  End={e.End} />
                </Reveal>
              );
            })
          }
          <ExperienceCard Position="Developer" Desc="Best Developer" Start="21.02.2021" End="12.09.23" />
        </div>
      </div>
  )
}


const ExperienceCard = ({ Position, Desc, Start, End, id }) => {
  return (
    <div className="ExpCard">
      <div className="numbering">
        <span className="number">{id == 1 ?
          <Bs1Circle size={20} /> : id == 2 ?
            <Bs2Circle size={20} /> : id == 3 ?
              <Bs3Circle size={20} /> : id == 4 ?
                <Bs4Circle size={20} /> :
                <Bs5Circle size={20} />}</span>
        <p className="title">{Position}</p>
      </div>
      <p className="desc">{Desc}</p>
      <p className="start">from: {Start}</p>
      <p className="end">to: {End}</p>
      <div className="verticle--line"></div>
    </div>
  );
}
export default Experience;

ExperienceCard.propTypes = {
  Position: PropTypes.string.isRequired,
  Desc: PropTypes.string.isRequired,
  Start: PropTypes.string.isRequired,
  End: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
