import '../Header/Header.css';
import '../../../src/App.css';
import Logo from '../../assets/Notify.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState,  createContext } from 'react';
import { PopupMenu } from '../GlobalComponent/GlobalComponent';

const MyContext = createContext("");

const Header = () => {
    const[isopen, setIsopen] = useState(false);
    const [windowDim, setWindowDim] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    });

    const MenuOpenClose = ()=>{
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
            <MyContext.Provider value={{isopen, MenuOpenClose}}>
            <img src={Logo} alt="logo" className='Website--logo' />
            {
                windowDim.winWidth < 1000 
                ?   (
                        isopen
                        ?
                        (
                            <PopupMenu option={isopen} task={MenuOpenClose}/>
                        )
                        :<AiOutlineMenu onClick={MenuOpenClose} className='Mobile--menu--icon'/>
                    )
                : 
                (
                    <div className='header--tabs'>
                        <p className='tab'>Home</p>
                        <p className='tab'>Skills</p>
                        <p className='tab'>Projects</p>
                        <p className='tab'>Experience</p>
                        <p className='tab'>Contact</p>
                    </div>
                )
            }
            </MyContext.Provider>
        </div>
    )
}

export {Header, MyContext};

