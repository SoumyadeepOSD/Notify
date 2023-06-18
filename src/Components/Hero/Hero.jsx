/* eslint-disable react/no-unescaped-entities */
import '../Hero/Hero.css';
import "@lottiefiles/lottie-player";

const Hero = () => {
    return (
        <div className="Container--hero large-spacing">
            <div>
                <h1 className='big--text'>Hi, I'm Soumyadeep</h1>
                <h1 className='big--text'>Welcome to my</h1>
                <h1 className='big--text'>Portfolio</h1>
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