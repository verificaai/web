import { useState } from 'react'
import './style.css'

import Acoes from './acoes'
import Consideracoes from './consideracoes'
import OqueE from './oquee'
import Problema from './problema'
import Resultados from './resultados'
import Solucao from './solucao'

function Topics() {
  function changeTopic(indice){
    switch(indice){
      case 1:
        break;
      case 2: 
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
    }
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
          
          <button onClick={() =>changeTopic(2)}>
            Problema
          </button>
          
          <button onClick={() =>changeTopic(3)}>
            Solução
          </button>
          
          <button onClick={() =>changeTopic(4)}>
            Ações
          </button>
          
          <button onClick={() =>changeTopic(5)}>
            Resultados
          </button>
          
          <button onClick={() =>changeTopic(6)}>
            Considerações
          </button>
        </div>

        <div className='texto'></div>
      </div>
     </div>
  )
}

export default Topics
