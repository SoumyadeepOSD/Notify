import '../GlobalComponent/Global.css';
import { useContext } from 'react';
import { MyContext } from '../Header/Header';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

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
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
    );
}

const RevealX = ({ children }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
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