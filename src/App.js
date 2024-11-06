import './App.css';
import { useState } from 'react';
import FistComponent from './Components/FistComponent';
import City from './Assets/City.jpeg';
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import LineSepara from './Components/LineSepara';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';
import Fragment from './Components/Fragment';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessage from './Components/ChangeMessage';
import UserDetails from './Components/UserDetails';


function App() {

  const [userName,setName] = useState("Maria");

  const [idade,setIdade] = useState("22");

  const cars = [
    {id: 1, brand:"ferrari", color: "Amarela", newCar: true, km: 0 },
    {id: 2, brand:"Uno", color: "branco", newCar: false, km: 43582034 },
    {id: 3, brand:"Palio", color: "preto", newCar: true, km: 0 },
  ]

  const User = [
    {id: 1, idade:15, nome: "joao", profissao: "Dev"},
    {id: 2, idade:18, nome: "Fabiana", profissao: "Auxiliar Cozinha"},
    {id: 3, idade:30, nome: "Luis", profissao: "Faxineira"},
  ]

  function showMessage(){
    console.log("Evento componete api")
  }

  const [message, setMessage] = useState("")

const handleMessage = (msg) =>{
   setMessage(msg);
};

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
      <div>
        <ShowUserName name={userName} idade={idade}/>
        <button onClick={() => setName("Luis")}>Click Aqui para alterar o name</button>
        <button onClick={() => setIdade("50")}>Click Aqui para alterar a idade</button>
      </div>
      <LineSepara/>
      <div>
        <h1>Destructuring</h1>
      <CarDetails  brand="VW" km={12900} color="Preto" newCar={false}/>
      <CarDetails  brand="Ford" km={84340} color="Vermelha" newCar={false}/>
      <CarDetails  brand="fiat" km={0} color="branco" newCar={true}/>
      </div>
      <LineSepara/>
      {cars.map((car)=>(
        <CarDetails 
         key={car.id}
         brand={car.brand} 
         color={car.color}
         km={car.km}
         newCar={car.newCar}/>
      ))}
       <LineSepara/>
       <div>
       <h1>-Fragment-</h1>
        <Fragment propFragment="Teste"/>
       </div>
       <LineSepara/>
       <div>
       <h1>-Children prop-</h1>
        <Container MyValue="5467">
          <p>Esse eo conteudo no app</p>
        </Container>
        <Container MyValue="85834">
          <p>Esse eo conteudo no app2</p>
        </Container>
       </div>
       <LineSepara/>
       <div>
       <h1>-Execute Funtion-</h1>
       <ExecuteFunction MyFunction={showMessage} />
       </div>
       <div>
       <h1>-state lift-</h1>
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage}/>
       </div>
       <LineSepara/>
       <div>
       <h1>-Desafio 4-</h1>
       {User.map((user)=>(
       <UserDetails
       key={user.id}
       idade={user.idade}
       profissao={user.profissao}
       nome={user.nome}
       />
      ))}
       </div>
       
      <FistComponent/>
    </div>
  );
}

export default App;