import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);  

    return (
    <div>
      <h1>Isso será exibido!</h1>
        { x && <p>Se x for true sim!</p> }
        { !x && <p>Agora x e falso!</p> }
    </div>
  );
};

export default ConditionalRender
