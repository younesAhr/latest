import './../styles/nav.css'
import { Link } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function Nav(){
    const [open,setOpen]=useState(faBars);
    function close(){
        document.getElementById('mn').classList='menu';
        setOpen(faBars);
    }
    return(
        <>
            <header className="header">
                <div className="logo-cont">
                    <FaHeartbeat color='#00A3CB' fontSize='2.5em'/><p className="logo">Zeta agen</p>
                </div>
                <div className="menu-btn" 
                onClick={function(){
                    if(open == faBars){
                        document.getElementById('mn').classList='menu1';
                        setOpen(faClose);
                    }else{
                        document.getElementById('mn').classList='menu';
                        setOpen(faBars);
                    }
                }}
                >
                    <FontAwesomeIcon icon={open} fontSize='2em' color='white'/>
                </div>
                <nav className="menu" id='mn'>
                    <a href="#home" className="links" onClick={close}>Home</a>
                    <a href="#svc" className="links" onClick={close}>Services</a>
                    <a href="#abt" className="links" onClick={close}>About</a>
                    <a href="#cnt" className="links" onClick={close}>Contact</a>
                </nav>
                <button className="login"><Link to="/login" className='login-link'>log in</Link></button>
            </header>
        </>
    )
}