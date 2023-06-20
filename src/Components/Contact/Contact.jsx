import '../Contact/Contact.css';
import {AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub, AiFillYoutube} from 'react-icons/ai';
import {SiBuymeacoffee, SiMedium, SiMastodon} from 'react-icons/si';

const Contact = () => {
    return (
      <div className="Container--contact">
        <AiFillLinkedin/>
        <AiOutlineTwitter/>
        <AiOutlineGithub/>
        <AiFillYoutube/>
        <SiBuymeacoffee/>
        <SiMedium/>
        <SiMastodon/>
      </div>
    )
  }
  
  export default Contact;