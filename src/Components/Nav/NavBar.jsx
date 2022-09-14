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
                        <Link to='/category/productos'>Productos</Link>
                    </li>
                    <li>
                        <Link to='/category/quiene-somos'>¿Quienes somos?</Link>
                    </li>
                    <li>
                        <Link to='/category/contacto'>Contacto</Link>
                    </li>
                    <li>
                        <Link to='/category/mi-cuenta'>Mi cuenta</Link>
                    </li>
                    <Link to='/category/cart'><CartWidget/></Link>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default NavBar