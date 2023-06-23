import '../Contact/Contact.css';
import { RevealX, SectionTitle } from "../GlobalComponent/GlobalComponent";
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub, AiFillYoutube } from 'react-icons/ai';

const Contact = () => {
  return (
      <div className='Container--contact' id='contact'>
        <SectionTitle title="Contact" />
        <RevealX>
        <div className="Social--icons">
          <AiFillLinkedin size={30} />
          <AiOutlineTwitter size={30} />
          <AiOutlineGithub size={30} />
          <AiFillYoutube size={30} />
        </div>
        </RevealX>
        <p id='copyright'>Copyright © 2023 Notify, all right reserved</p>
      </div>
  )
}

export default Contact;