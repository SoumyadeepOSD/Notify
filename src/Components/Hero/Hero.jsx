/* eslint-disable react/no-unescaped-entities */
import '../Hero/Hero.css';
import "@lottiefiles/lottie-player";
import { Reveal } from '../GlobalComponent/GlobalComponent';

const Hero = () => {
    return (
        <div className="Container--hero large-spacing">
            <div>
                <Reveal>
                <h1 className='big--text'>Hi, I'm <span className='gradient--text'>Soumyadeep</span></h1>
                </Reveal>
                <Reveal>
                <h1 className='big--text'>Welcome to my</h1>
                </Reveal>
                <Reveal>
                <h1 className='big--text gradient--text'>Portfolio</h1>
                </Reveal>
            </div>
            <lottie-player
                className='lottie--animation'
                autoplay
                loop
                mode="normal"
                src="https://assets5.lottiefiles.com/private_files/lf30_obidsi0t.json"
                style={{ width: "400px", height: "400px" }}
            >
            </lottie-player>
        </div>
    )
}

export default Hero;