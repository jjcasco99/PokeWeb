import Footer from './components/Footer/'
import Header from './components/Header/';
import Main from './components/Main/'; 
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
