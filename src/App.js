import CartWidget from './Components/Nav/CartWidget';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import NavBar from './Components/Nav/NavBar';
import Layout from './Layout';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () =>  {
  return (
    <Layout>
      <Header/>
      <ItemListContainer/>
      <Main />
      <Footer/>
    </Layout>
); 
};

export default App;
