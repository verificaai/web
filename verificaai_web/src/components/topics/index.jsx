import { useState } from 'react'
import './style.css'
import Acoes from './acoes.jsx'

function Topics() {
  function changeTopic(indice){

  }

  return (
     <div className='page'>
      <div className='sobre'>
        <h1>
          VerificaAI
        </h1>

        <div className='topicos'>
          <button onClick={() =>changeTopic(1)}>
            VerificaAI
          </button>
          
          <button onClick={() =>changeTopic(1)}>
            Problema
          </button>
          
          <button onClick={() =>changeTopic(1)}>
            Solução
          </button>
          
          <button onClick={() =>changeTopic(1)}>
            Ações
          </button>
          
          <button onClick={() =>changeTopic(1)}>
            Resultados
          </button>
          
          <button onClick={() =>changeTopic(1)}>
            Considerações
          </button>
        </div>

        <Acoes />
      </div>
     </div>
  )
}

export default Topics
