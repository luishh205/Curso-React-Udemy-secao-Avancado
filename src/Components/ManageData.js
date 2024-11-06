import {useState} from "react"
const ManageData = () =>{
    let someData = 10;
    
    const [number, setNumber] = useState(5); 

    return(
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar var</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(20)}>Mudar o state</button>
        </div>
    </div>
    )
};
export default ManageData;