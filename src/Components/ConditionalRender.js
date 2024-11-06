import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);  

const [name, setName]= useState("Joao");

    return (
    <div>
      <h1>Isso será exibido!</h1>
        { x && <p>Se x for true sim!</p> }
        { !x && <p>Agora x e falso!</p> }
        <h1>If Ternario</h1>
        {name  === "Joao" ? (
            <div>
                <p>Nome e joao</p>
            </div>
        ) : (
            <div>
                <p>Nome Não e joao, Agora e {name}</p>
            </div>
        ) }
        <button onClick={() => setName("Luis")}>Click Aqui para alterar o name</button>
    </div>
  );
};

export default ConditionalRender
