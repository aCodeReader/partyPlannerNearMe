
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Router from './Router'

function App() {
  return (
  <BrowserRouter>

  <Nav/>
  <Router/>
  <Footer/>

  </BrowserRouter>
  );
}

export default App;
