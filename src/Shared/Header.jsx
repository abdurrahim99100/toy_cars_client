import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/images.png';

const Header = () => {

    const user = '';

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/allToy'>All Toys</Link></li>
        {
            user ?
                <>
                    <li><Link to='/myToy'>My Toys</Link></li>
                    <li><Link to='/addToy'>Add A Toy</Link></li>
                    <li><button onClick={handleLogout}>Log out</button></li>
                </> :
                <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="p-2">
                            {navItems}
                        </ul>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-20 h-20' src={Logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Tesla Cars</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;