import React from 'react';
import logo from '../../images/logo.png'
import './Header.scss'
import {MobileIcon} from "./MobileIcon";
import {FaBars} from 'react-icons/fa'


const menuList = [
    { link: '#home', title: 'HOME'},
    { link: '#about', title: 'ABOUT'},
    { link: '#expertise', title: 'EXPERTISE'},
    { link: '#team', title: 'TEAMS'},
    { link: '#work', title: 'WORKS'},
    { link: '#people', title: 'PEOPLE SAY'},
    { link: '#contact ', title: 'CONTACT'}
];


const MenuItem = ({ link, title }) => {
    return (
    <li className="nav__item">
        <a href={ link } className="nav__item--link">{ title }</a>
    </li>
    );
}

const Header = () => {
    return (
        <>
        <header className='header '>
            <div className="wrapper__main">
                <div className="header__inner">
            <a>
                <img className='logo__img' src={logo} alt="logo"/>
            </a>
                <nav className="nav">
                    <ul className='nav__list'>
                        { menuList.map((menuItem, index) => <MenuItem title={menuItem.title} link={menuItem.link} key={index} />)}
                    </ul>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon >
                </nav>
                </div>
            </div>
        </header>
            </>
    );
};

export default Header;
