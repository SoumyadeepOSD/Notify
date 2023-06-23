import '../Header/Header.css';
import '../../../src/App.css';
import Logo from '../../assets/Notify.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState, createContext } from 'react';
import { PopupMenu, Reveal } from '../GlobalComponent/GlobalComponent';


const MyContext = createContext("");

const Header = () => {
    const [isopen, setIsopen] = useState(false);
    const [windowDim, setWindowDim] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    });

    const MenuOpenClose = () => {
        setIsopen(!isopen);
    }

    const DetectSize = () => {
        setWindowDim({
            winHeight: window.innerHeight,
            winWidth: window.innerWidth
        })
    }
    useEffect(() => {
        window.addEventListener('resize', DetectSize)

        return () => {
            window.removeEventListener('resize', DetectSize)
        }
    }, [windowDim])
    return (

        <div className='Container--header Spacing'>
            <MyContext.Provider value={{ isopen, MenuOpenClose }}>
                <Reveal>
                <img src={Logo} alt="logo" className='Website--logo' />
                </Reveal>
                {
                    windowDim.winWidth < 1000
                        ? (
                            isopen
                                ?
                                (
                                    <PopupMenu option={isopen} task={MenuOpenClose} />
                                )
                                : <AiOutlineMenu onClick={MenuOpenClose} className='Mobile--menu--icon' />
                        )
                        :
                        (
                            <div className='header--tabs'>
                                <Reveal>
                                    <p className='tab'><a href="/">Home</a></p>
                                </Reveal>
                                <Reveal>
                                    <p className='tab'><a href="#skill">Skills</a></p>
                                </Reveal>
                                <Reveal>
                                    <p className='tab'><a href="#project">Projects</a></p>
                                </Reveal>
                                <Reveal>
                                    <p className='tab'><a href="#experience">Experience</a></p>
                                </Reveal>
                                <Reveal>
                                    <p className='tab'><a href="#contact">Contact</a></p>
                                </Reveal>
                            </div>
                        )
                }
            </MyContext.Provider>
        </div>
    )
}

export { Header, MyContext };

