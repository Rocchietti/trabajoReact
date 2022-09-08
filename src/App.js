import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
const App = () =>  {



  return (
    <BrowserRouter>
      <Layout/>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
); 
};

export default App;
