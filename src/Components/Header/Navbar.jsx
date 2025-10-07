import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import { Github } from 'lucide-react';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink className={({ isActive }) => isActive && "underline"} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive && "underline"} to='/apps'>Apps</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive && "underline"} to='/installation'>Installation</NavLink></li>

                    </ul>
                </div>
                <NavLink
                    to='/'
                    className="btn  text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold">
                    <img
                        src={logoImg}
                        alt="logo"
                        className='w-10'
                    />
                    HERO.IO
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li class="bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><NavLink className={({ isActive }) => isActive && "underline text-[#9F62F2]"} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive && "underline"} to='/apps'>Apps</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive && "underline"} to='/installation'>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink
                    to='https://github.com/NusratJahanNila' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                        <Github />
                    Contribute
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;