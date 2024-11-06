import { useState } from 'react'

const ListRender = () => {

const [list] = useState(["Matheus", "Luis", "Pedro"]);

const [users, setUsers] = useState([
  { id:1, name:"matheus", age:28 },
  { id:2, name:"Joao", age:11 },
  { id:3, name:"Pedro", age:22 },
]);

const deleteRandom = () => {
  const randomNumber = Math.floor(Math.random() * 4);

  setUsers((prevUsers)=>{
    console.log(prevUsers);
    return prevUsers.filter((user) => randomNumber !== user.id);
  });
};

  return (
    <div>
      <ul>
        {list.map((item,i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user)=>(
        <li key={user.id}>
          {user.name} - {user.age}
        </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete</button>
    </div>
  );
};
export default ListRender;
