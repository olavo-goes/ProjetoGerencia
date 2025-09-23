import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const [,] = useState(0);

  return (
    <Router>
      <>
        <Header
          leftText="Assasins Creed Smurfs"
          logoSrc={`${import.meta.env.BASE_URL}public/images/LogoSmurfsCreed.png`}
        />
        <Cards />
        <Footer leftText="Desenvolvido por Olavo O.M Goes e Marina O.M Goes" />
      </>
    </Router>
  );

}

export default App;