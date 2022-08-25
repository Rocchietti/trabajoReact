import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Layout from './Layout/Layout';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () =>  {
  return (
    <Layout>
      <Header/>
      <ItemListContainer saludo='He luchado mucho tiempo por sobrevivir, pero no importa qué, siempre tienes que encontrar algo por lo que luchar. THE LAST OF US'/>
      <Main />
      <Footer/>
    </Layout>
); 
};

export default App;
