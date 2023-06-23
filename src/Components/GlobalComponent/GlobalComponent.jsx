import '../GlobalComponent/Global.css';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../Header/Header';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { motion, useInView, useAnimation } from 'framer-motion';


const PopupMenu = () => {
    const { isopen, MenuOpenClose } = useContext(MyContext);
    return (
        <div className="PopupCardStyle">
            {
                isopen
                    ? <AiOutlineClose onClick={MenuOpenClose} className='Mobile--menu--icon' />
                    : <AiOutlineMenu onClick={MenuOpenClose} className='Mobile--menu--icon' />
            }
            <p className="mobileTab">Home</p>
            <p className="mobileTab">Skills</p>
            <p className="mobileTab">Projects</p>
            <p className="mobileTab">Experience</p>
            <p className="mobileTab">Contact</p>

        </div>
    );
}


const DecorationLine = () => {
    return (
        <div className='line'>
        </div>
    );
}


const SectionTitle = ({ title }) => {
    return (
        <div className='section--title'>
            <h2 className='medium--text'>{title}</h2>
            <DecorationLine />
        </div>
    );
}

const CustomButton = () => {
    return (
        <RevealX>
            <div className='container--button'>
                <p>My Resume</p>
            </div>
        </RevealX>
    );
}

const Reveal = ({ children }) => {
    const ref = useRef(0);
    const isInView = useInView(ref, {once:true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView])
    return (
        <span ref={ref}
            style={{ position: "relative", width:'100%', overflow:"hidden"}}    
        >
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
        <motion.dev
            variants={{
                hidden: {left:0},
                visible: {left:"100%"},
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration:1, ease:"easeIn"}}
            style={{
                position:'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "linear-gradient(90deg, rgb(0, 102, 255, 0.23), rgb(4, 255, 8))",
                zindex: 20,
            }}
        >

        </motion.dev>
        </span>
    );
}

const RevealX = ({ children }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, left: 60 },
                visible: { opacity: 1, right: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
        >
            {children}
        </motion.div>
    );
}


export { PopupMenu, DecorationLine, SectionTitle, CustomButton, Reveal, RevealX };



SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}
Reveal.propTypes = {
    children: PropTypes.object
}
RevealX.propTypes = {
    children: PropTypes.object
}