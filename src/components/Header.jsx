import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../assets/images/logo.png';
import userImg from '../assets/images/Giri.png';

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Find a Doctor'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    return (
        <header className="header flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">

                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className={`navigation ${isMenuOpen ? 'show__menu' : ''}`}>
                        {/* Apply show__menu class if menu is open */}
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                                        className="text-textColor text-[16px] leading-7 font-[500]"
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                    <img src={userImg} className="w-full rounded-full" alt=" " />
                                </figure>
                            </Link>
                        </div>
                        <Link to='/login'>
                            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
                                      justify-center rounded-[50px]">Login</button>
                        </Link>
                        {/* Always show menu icon */}
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className='w-6 h-6 cursor-pointer'/>
                        </span>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
