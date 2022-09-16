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
                        <Link to='/category/Placas de Video'>Placas de Video</Link>
                    </li>
                    <li>
                        <Link to='/category/Placas Madre'>Mother</Link>
                    </li>
                    <li>
                        <Link to='/category/Disco de estado Solido'>SSD</Link>
                    </li>
                    <li>
                        <Link to='/category/Monitores'>Monitores</Link>
                    </li>
                    <Link to='/category/cart'><CartWidget/></Link>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default NavBar