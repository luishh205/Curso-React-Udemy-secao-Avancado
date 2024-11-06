import './App.css';
import FistComponent from './Components/FistComponent';
import City from './Assets/City.jpeg';
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import LineSepara from './Components/LineSepara';

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
      <LineSepara/>
      <div>
            <ManageData/>
      </div>
      <LineSepara/>
      <div>
            <ListRender/>
      </div>
      <LineSepara/>
      <div>
        <ConditionalRender/>
      </div>
      <LineSepara/>
      <FistComponent/>
    </div>
  );
}

export default App;