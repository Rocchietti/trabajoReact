import React from 'react';
import CartWidget from './CartWidget';
import './nav.css'
const NavBar = () =>  {
    return (
            <>
        <nav className='navBar'>
            <ul className='listUnordened'>
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
                <CartWidget />
            </ul>
        </nav>
        </>
    );
}

export default NavBar