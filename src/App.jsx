import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import './App.css';


function App() {
  return (
    <div>
      <h1>Meu Projeto Teste</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}

export default App;
