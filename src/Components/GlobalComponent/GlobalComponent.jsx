import '../GlobalComponent/Global.css';
import { useContext } from 'react';
import { MyContext } from '../Header/Header';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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
            line
        </div>
    );
}


export { PopupMenu, DecorationLine };

