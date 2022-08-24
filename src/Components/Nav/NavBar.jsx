import React from 'react';
import './nav.css'
const NavBar = () =>  {
    return (
        <header>
            <h1 className='tituloTienda'>Gamergy Store</h1>
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
                </ul>
            </nav>
        </header>
    );
}

export default NavBar