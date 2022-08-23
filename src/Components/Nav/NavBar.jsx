import React from 'react';
import './navbar.css';
const NavBar = () => {
  return (
        <header>
            <h1>Gamergy Store</h1>
        <nav>
            <ul>
                <li className='lista-navbar'>
                    <li>
                    <a href='https://google.com'>Productos</a>
                    </li>
                    <li>
                    <a href='https://google.com'>¿Quiénes Somos?</a>
                    </li>
                    <li>
                    <a href='https://google.com'>Contacto</a>      
                    </li>
                    <li>
                    <a href='https://google.com'>Mi cuenta</a>
                    </li>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default NavBar