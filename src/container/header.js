import React from 'react';
import  'boxicons';
import  '../styles/header.css';

const Header = () => {

  function toggleMenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
  }


  return (
    <>
    <header>
        <a href="/" className='logo'>Hari.</a>
        <div className="header-right">
            <ul className="nav">
                <li><a href="https://github.com/Devharirolls">Websites</a></li>
                <li><a href="https://www.linkedin.com/in/hari-haran-j-ab5742271/">Contact</a></li>
            </ul>
            <a href="#" className="menu" onClick={toggleMenu}><box-icon name='menu-alt-right' color = 'white'></box-icon></a>

        </div>
    </header>
    <ul className="nav-mobile">
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="https://github.com/Devharirolls">Websites</a></li>
        <li><a href="https://www.linkedin.com/in/hari-haran-j-ab5742271/">Contact</a></li>
    </ul>
    </>
    
  )
}

export default Header;