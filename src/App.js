import './App.css';
import FistComponent from './Components/FistComponent';
import City from './Assets/City.jpeg';

function App() {
  return (
    <div className="App">
      <div>
         <h1>Começãndo a Seção Avançado</h1>
         <div>
          <img src="/Paisagem.jpeg" alt="paisagem" />
         </div>
         <div>
          <img src={City} alt="Cidade" />
         </div>
      </div>
      <FistComponent/>
    </div>
  );
}

export default App;
