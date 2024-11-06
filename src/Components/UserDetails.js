import LineSepara from "./LineSepara"

const UserDetails = ({nome, idade ,profissao}) => {

  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
      {idade >= 18 ?
      (<p>Pode tirar carteira!</p>)
      :
      (<p>Não pode tirar carteira</p>)
      }
      <LineSepara/>
    </div>
  )
}

export default UserDetails
