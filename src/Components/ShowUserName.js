import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h1>Props</h1>
        <h2>O nome do usuario: {props.name}</h2>
        <h2>A idade do usuario: {props.idade}</h2>
    </div>
  )
}

export default ShowUserName;