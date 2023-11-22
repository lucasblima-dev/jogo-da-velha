import React from "react";
import './styles.css';
import Logo from '../../objects/Logo';
import About from '../../objects/About';
import Menu from '../../objects/Menu';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <About/>
            <Menu />
        </header>
    )
}

export default Header;