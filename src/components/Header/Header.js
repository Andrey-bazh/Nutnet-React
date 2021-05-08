import React from 'react';
import logo from '../../images/logo.png'
import './Header.scss'


const menuList = [
    { link: 'https://github.com', title: 'HOME'},
    { link: 'https://github.com', title: 'ABOUT'},
    { link: 'https://github.com', title: 'EXPERTISE'},
    { link: 'https://github.com', title: 'TEAMS'},
    { link: 'https://github.com', title: 'WORKS'},
    { link: 'https://github.com', title: 'PEOPLE SAY'},
    { link: 'https://github.com', title: 'CONTACT'}
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
                </nav>
                </div>
            </div>
        </header>
            </>
    );
};

export default Header;
