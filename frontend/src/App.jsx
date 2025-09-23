import './App.css'
import Cards from './components/Cards'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header leftText="Assasins Creed Smurfs" />
      <Cards />
      <Footer leftText="Desenvolvido por Olavo O.M Goes e Marina O.M Goes" />
    </>
  )
}

export default App