import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import CardContext from './Context/CardContext';


const App = () =>  {
  
  return (
    <CardContext>
      <BrowserRouter>
        <Layout/>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CardContext>
); 
};

export default App;
