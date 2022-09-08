import React from 'react';
import CartWidget from './CartWidget';
import './nav.css'
import { Link } from 'react-router-dom';
const NavBar = () =>  {
    return (
            <>
        <header>
            <nav className='navBar'>
          <Link to='/'> <h1 className='tituloTienda'>Gamergy Store</h1> </Link>
                <ul className='listUnordened'>
                    <li>
                        <Link to='/category/:Productos'> Productos </Link>
                    </li>
                    <li>
                        <Link to='/category/:quieneSomos'>¿Quienes somos?</Link>
                    </li>
                    <li>
                        <Link to='/category/:Contacto'>Contacto</Link>
                    </li>
                    <li>
                        <Link to='/category/:miCuenta'>Mi cuenta</Link>
                    </li>
                <CartWidget/>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default NavBar