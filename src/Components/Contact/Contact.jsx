import '../Contact/Contact.css';
import { SectionTitle } from "../GlobalComponent/GlobalComponent";
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub, AiFillYoutube } from 'react-icons/ai';



  const handleEmailClick = () => {
    const emailAddress = 'example@example.com';
    const subject = 'Hey Soumyadeep How are you!';
    const body = 'Hi my name is...';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

const Contact = () => {
  return (
      <div className='Container--contact' id='contact'>
        <SectionTitle title="Contact" />
        <div className="Social--icons">
         <a href="https://www.linkedin.com/in/soumyadeep-das-bhowmick-01a882234/">
          <AiFillLinkedin size={30} />
         </a>
         <a href="https://twitter.com/SoumyadeepDasB6">
          <AiOutlineTwitter size={30} />
         </a>
         <a href="https://github.com/SoumyadeepOSD">
          <AiOutlineGithub size={30} />
         </a>
          <AiFillYoutube size={30} onClick={handleEmailClick}/>
        </div>
        <p id='copyright'>Copyright © 2023 Notify, all right reserved</p>
      </div>
  )
}

export default Contact;