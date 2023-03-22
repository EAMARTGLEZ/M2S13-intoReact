//import logo from './logo.svg';
import TituloClase from "./components/TituloClase";
import TituloFunctional from "./components/TituloFunctional";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Este es el componente App.</h1>
      <TituloClase></TituloClase>
      <br/>
      <TituloFunctional/>
    </div>
  );
}

export default App;
