import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../Nav/NavBar';
import './header.css';
const Header = () => {
    return(
        <header>
            <h1 className='tituloTienda'>Gamergy Store</h1>
        <NavBar/>
        </header>
    ) 
};
export default Header;