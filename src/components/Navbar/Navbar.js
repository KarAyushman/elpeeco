import React, {useState} from 'react'
import './Navbar.css'
import logoNameWhite from '../../images/logoNameWhite.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  const handleClick1 = () => {setClick1(true);setClick2(false);setClick3(false);setClick4(false);setClick5(false);}
  const handleClick2 = () => {setClick1(false);setClick2(true);setClick3(false);setClick4(false);setClick5(false);}
  const handleClick3 = () => {setClick1(false);setClick2(false);setClick3(true);setClick4(false);setClick5(false);}
  const handleClick4 = () => {setClick1(false);setClick2(false);setClick3(false);setClick4(true);setClick5(false);}
  const handleClick5 = () => {setClick1(false);setClick2(false);setClick3(false);setClick4(false);setClick5(true);}

  return (
    <div className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo"><img src={logoNameWhite} alt="" className='navLogo' onClick={handleClick1}/></Link>
            <div className="navbar-menu">
              <Link to='/' className={click1 ? 'menu-element-hover' : 'menu-element'} onClick={handleClick1}>Home</Link>
              <Link to='/services' className={click2 ? 'menu-element-hover' : 'menu-element'} onClick={handleClick2}>Services</Link>
              <Link to='/media' className={click3 ? 'menu-element-hover' : 'menu-element'} onClick={handleClick3}>Media</Link>
              <Link to='/locations' className={click4 ? 'menu-element-hover' : 'menu-element'} onClick={handleClick4}>Locations</Link>
              <Link to='/contact-us' className={click5 ? 'menu-element-hover' : 'menu-element'} onClick={handleClick5}>Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
