import { useState } from 'react'
import './style.css'
import VerificaAI from '../../assets/VerificaAI-about.svg'

import OqueE from './oquee'
import Problema from './problema'
import Solucao from './solucao'
import Acoes from './acoes'
import Resultados from './resultados'
import Consideracoes from './consideracoes'

function Topics() {
  const [conteudo, setConteudo] = useState(null);

  function changeTopic(indice){
    switch(indice){
      case 1:
        setConteudo(<OqueE />)
        break;
      case 2: 
        setConteudo(<Problema />)
        break;
      case 3:
        setConteudo(<Solucao />)
        break;
      case 4:
        setConteudo(<Acoes />)
        break;
      case 5:
        setConteudo(<Resultados />)
        break;
      case 6:
        setConteudo(<Consideracoes />)
        break;
    }
  }

  return (
    <div className='sobre'>
      <img src={VerificaAI}/>

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

      <div className='texto'>
        {conteudo}
      </div>
    </div>
  )
}

export default Topics
