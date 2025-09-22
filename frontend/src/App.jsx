import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const [,] = useState(0);

  return (
    <Router>
      <>
        <Header
          leftText="Assasins Creed Smurfs"
          logoSrc="/images/LogoSmurfsCreed.png"
        />
        <Cards />
      </>
    </Router>
  );
}

export default App;