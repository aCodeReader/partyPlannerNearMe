import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Drawerx from './components/Drawer'
import Router from './Router'

function App() {
  return (
  <BrowserRouter>

  <Drawerx/>
  <Router/>

  </BrowserRouter>
  );
}

export default App;
