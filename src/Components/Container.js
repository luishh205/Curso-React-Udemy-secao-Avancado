import React from 'react'

const Container = ({children, MyValue}) => {
  return (
    <div>
      <h2>Este eo titulo do container</h2>
      {children}
      <p>O valor é: {MyValue}</p>
    </div>
  )
}

export default Container
