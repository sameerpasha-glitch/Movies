import React from 'react'
import "./nav.css"
import Home from './Home'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Login.jsx"
const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.style.backgroundColor = darkMode ? '#ffffff' : '#1e1e1e';
        document.body.style.color = darkMode ? '#000000' : '#ffffff';
        localStorage.setItem('darkMode', darkMode);
    };

    return (
        <>
            <nav className='navbar'>
                <ul className='nav-ul'>
                    <img src="https://cdn6.aptoide.com/imgs/8/0/a/80aa2d002dac71c2c8cc2708450a6460_icon.png" alt="" className='nav-img' />
                    <li style={{ color: "gray", textDecoration: "underline" }}>Home</li>
                    <button onClick={toggleMode} className="toggle-btn" style={{ borderRadius: '50%', padding: '5px' }}>
                        <img
                            src={darkMode
                                ? "https://cdn-icons-png.flaticon.com/128/11513/11513541.png"
                                : "https://cdn-icons-png.flaticon.com/128/547/547433.png"}
                            alt={darkMode ? "Night Mode" : "Day Mode"}
                            style={{ width: "30px", height: "30px" }}
                        />
                    </button>

                    <li><Link to="/support" style={{ textDecoration: 'none' }}>Support</Link></li>
                    <button className='nav-but' > <Link to="/Login" style={{ textDecoration: 'none' }}>Log in</Link></button>
                </ul>
            </nav>
            <nav className='navbar1'>
                <ul className='nav-ul'>
                    <img src="https://cdn6.aptoide.com/imgs/8/0/a/80aa2d002dac71c2c8cc2708450a6460_icon.png" alt="" className='nav-img' />
                    <li style={{ color: "gray", textDecoration: "underline" }}>Home</li>
                    <button onClick={toggleMode} className="toggle-btn" style={{ borderRadius: '50%', padding: '5px' }}>
                        <img
                            src={darkMode
                                ? "https://cdn-icons-png.flaticon.com/128/11513/11513541.png"
                                : "https://cdn-icons-png.flaticon.com/128/547/547433.png"}
                            alt={darkMode ? "Night Mode" : "Day Mode"}
                            style={{ width: "30px", height: "30px" }}
                        />
                    </button>

                    <li><Link to="/support" style={{ textDecoration: 'none' }}>Support</Link></li>
                    <button className='nav-but' > <Link to="/Login" style={{ textDecoration: 'none' }}>Log in</Link></button>
                </ul>
            </nav>
            <Home />

        </>
    )
}

export default Nav
